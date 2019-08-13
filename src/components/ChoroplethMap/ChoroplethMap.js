import React, {Component} from 'react';
import MapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import {fromJS} from 'immutable';

import { range } from 'd3-array';
import {json as requestJson} from 'd3-request';
import { scaleThreshold } from 'd3-scale';

import ControlPanel from '../ControlPanel/ControlPanel';
import {defaultMapStyle, dataLayer} from '../../data/map-style.js';
// import {updatePercentiles} from './utils';
import Tooltip from '../Tooltip/Tooltip';
import SETTINGS from '../../data/settings.js';


import './ChoroplethMap.css';
import 'mapbox-gl/dist/mapbox-gl.css';


export default class ChoroplethMap extends Component {
  	state = {
		mapStyle: defaultMapStyle,
		colorStops: [],
		currentView: 'Indian',
		data: null,
		displayPopulations: SETTINGS.displayPopulations_select,
		hoveredFeature: null,
		legendColors: SETTINGS.colors,
		thresholds: SETTINGS.thresholds,
		viewport: {
			latitude: 49.228833,
			longitude: -122.922978,
			zoom: 9,
			bearing: 0,
			pitch: 0
		}
	};

	componentDidMount() {
		requestJson(SETTINGS.dataUrl, (error, response) => {
			if (!error) {
				this._loadData(response);
			}
		});

		// set our colour scale
		this.scale = scaleThreshold()
			.domain(this.state.thresholds)
			.range(range(this.state.thresholds.length + 1)); // 0-based array

		// // prep work for the legend
		// const paintLayer = dataLayer.get('paint').toJS();
		// this.setState({ legendColors: paintLayer['fill-color'].stops.flat().filter(d => !Number.isInteger(d)) });

		// make the colors array mapbox-compatible
		const stops = SETTINGS.colors.map((d,i) => {
			return [i, d]
		});	
		this.setState({
			colorStops: dataLayer.setIn(['paint', 'fill-color', 'stops'], fromJS(stops))
		});
	}

	_loadData = data => {
		const property = this.state.currentView;

		// set the percent and percentile value for the tooltip & color data
		data.features.forEach(d => {
			let value = d.properties[property];
			d.properties.percent = value;
			d.properties.percentile = this.scale(value);
		});

	
		// create the mapstyle 
		const mapStyle = defaultMapStyle
			// Add geojson source to map
			.setIn(['sources', 'population'], fromJS({type: 'geojson', data}))
			// Add data layer below the labels for readability
			.set('layers', defaultMapStyle.get('layers').insert(15, this.state.colorStops));
			// .set('layers', defaultMapStyle.get('layers').push(dataLayer));

		this.setState({data, mapStyle});
	};

	_updateSettings = id => {
		const { data, mapStyle } = this.state;

		// loop through & update the percentile attribute with the currently selected population group (id)
		data.features.forEach(d => {
			let value = d.properties[id];
			d.properties.percent = value;			
			d.properties.percentile = this.scale(value);
		});

		const newMapStyle = mapStyle.setIn(['sources', 'population', 'data'], fromJS(data));
		this.setState({
			currentView: id,
			mapStyle: newMapStyle
		});
	};

	_onViewportChange = viewport => this.setState({viewport});

	_onHover = event => {
		const {
			features,
			srcEvent: {offsetX, offsetY}
		} = event;
		const hoveredFeature = features && features.find(f => f.layer.id === 'data');

		this.setState({hoveredFeature, x: offsetX, y: offsetY});
	};

	_renderTooltip() {
		const {hoveredFeature, x, y} = this.state;
	
		return (
			hoveredFeature && (
				<Tooltip
					hoveredFeature={hoveredFeature}
					currentView={this.state.currentView}
					x={x}
					y={y}
				></Tooltip>
			)
		);
	}

	render() {
		const {viewport, mapStyle} = this.state;

		return (
		  	<div style={{height: '100%'}}>
				<MapGL
					{...viewport}
					width='100%'
					height='100%'
					mapStyle={mapStyle}
					// mapStyle='mapbox://styles/mapbox/streets-v11'
					onViewportChange={this._onViewportChange}
					mapboxApiAccessToken={this.props.api_key}
					onHover={this._onHover}
				>
					<GeolocateControl 
				    	positionOptions={{enableHighAccuracy: true}}
				    	trackUserLocation={true}
				    />
				    <NavigationControl showCompass={false}/>

					{this._renderTooltip()}
				</MapGL>

				<ControlPanel 
					settings={this.state}
					onClick={this._updateSettings}
				/>
		  	</div>
		);
	}
}

