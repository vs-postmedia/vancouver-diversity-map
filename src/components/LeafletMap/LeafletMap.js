import React, { Component } from 'react';
import { Map, TileLayer, Polyline } from 'react-leaflet';
import MapboxGLLayer from '../MapboxGLLayer/MapboxGLLayer';
// import MapStyle from '../../data/map-style-basic-v8.json';

import './LeafletMap.css';
import 'leaflet/dist/leaflet.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class LeafletMap extends Component {

	state = {
		map_url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		attribution: '&copy;<a href=&quot;http://osm.org/pyright&quot;>OpenStreetMap</a> contributors',
		viewport: {
			latitude: 49.228833,
			longitude: -122.922978,
			zoom: 10
		}
	}
	render() {

		const centre = [this.state.viewport.latitude, this.state.viewport.longitude];
		return (
			<Map 
				center={centre} 
				zoom={this.state.viewport.zoom}>

				
				<MapboxGLLayer
					accessToken={this.props.api_key}/>
					
			</Map>
		);
	}
}


/*
<TileLayer url={this.state.map_url} 
	attribution={this.state.attribution} 
	maxZoom={this.state.viewport.zoom}
	minZoom={this.state.viewport.zoom} />
*/
