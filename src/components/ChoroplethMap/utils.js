import { range } from 'd3-array';
import { scaleQuantile, scaleLinear, scaleThreshold } from 'd3-scale';

export function updatePercentiles(featureCollection, accessor) {
	const {features} = featureCollection;


	// const scale = scaleQuantile()
	// 	.domain(features.map(accessor))
	// 	// .domain([0,100])
	// 	.range(range(8));

	const scale = scaleThreshold()
		.domain([1, 5, 10, 15, 25, 35, 50, 75])
		.range(range(8));

	// console.log(scale.quantiles())
	
	features.forEach(f => {
		// console.log(f, accessor)
		// console.log(f.properties[accessor])
		// let value = accessor(f);
		let value = f.properties[accessor];
		// let value = Math.random() * 100

		// if (value > 0) { console.log(value, scale(value))}
			// console.log(value, scale(value))
		f.properties.value = value;
		// f.properties.percentile = scale(value);
		f.properties.percentile = scale(Math.round(value));

		
		if (value > 0) {
			// console.log(f.properties.value, f.properties.percentile, f.properties.count, f.properties.Filipino)
		}
		console.log(f.properties.value, f.properties.percentile, f.properties.count, f.properties.Filipino)
	});
}