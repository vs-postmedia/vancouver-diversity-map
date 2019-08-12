import React from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
	const {hoveredFeature, x, y} = props;

	// console.log(hoveredFeature)
	// const percent = 
	return (
		<div className="tooltip" style={{ left: x, top: y }}>
			<div>GeoUID: { hoveredFeature.properties.GeoUID }</div>
			<div>Population: { hoveredFeature.properties.Population }</div>
			<div>Percent: { parseFloat(hoveredFeature.properties.percent).toFixed(1) }</div>
			<div>Percentile: { (hoveredFeature.properties.percentile) }</div>
		</div>
	);
}

export default Tooltip;