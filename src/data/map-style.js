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
				[1, '#A7A9AB'],
				[2, '#f1eef6'],
				[3, '#d0d1e6'],
				[4, '#a6bddb'],
				[5, '#74a9cf'],
				[6, '#2b8cbe'],
				[7, '#045a8d']
				// [1, '#A7A9AB'],
				// [2, '#D4DAEA'],
				// [3, '#AFBEDB'],
				// [4, '#829DC7'],
				// [5, '#6D8EBF'],
				// [6, '#3C76B0'],
				// [7, '#0062A3']
			]
		},
		'fill-opacity': 0.8,
		'fill-outline-color': '#FFFFFF'
	}
});

export const defaultMapStyle = fromJS(MAP_STYLE);

/*
[1, '#FFFFFF']

[9, 'red']
*/