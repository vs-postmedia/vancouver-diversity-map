import {fromJS} from 'immutable';
// import MAP_STYLE from './map-style-basic-v8.json';
import MAP_STYLE from './map-style-positron.json';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
	id: 'data',
	source: 'population',
	type: 'fill',
	interactive: true,
	paint: {
		'fill-color': {
			property: 'percentile',
			stops: [
				[0, '#A7A9AB'],
				[1, '#D4DAEA'],
				[2, '#AFBEDB'],
				[3, '#829DC7'],
				[4, '#6D8EBF'],
				[5, '#3C76B0'],
				[6, '#0062A3']
			]
		},
		'fill-opacity': 0.9,
		'fill-outline-color': '#FFFFFF'
	}
});

export const defaultMapStyle = fromJS(MAP_STYLE);

