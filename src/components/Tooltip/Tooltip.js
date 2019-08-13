import React from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
	const {currentView, hoveredFeature, x, y} = props;
	const prop = hoveredFeature.properties

	const blockList = ['GeoUID', 'Population', 'percent', 'percentile'];

	const sortable = []
	Object.keys(prop).map((key, i) => {
		if (!blockList.includes(key)) {
			sortable.push([key, prop[key]])
		}
	});

	const tooltipData = sortable.sort((a,b) => {
		return b[1] - a[1];
	}).slice(0,5);
	console.log(tooltipData)
	
	return (
		<div className="tooltip" style={{ left: x, top: y - 50 }}>
			<p className='current-view'>{currentView}</p>
			<h1 className='current-percent'>{`${parseFloat(hoveredFeature.properties[currentView]).toFixed(1)}%`}</h1>
			<hr />
			<h4>Top ancesties reported:</h4>
			
			{
				tooltipData.map((d, i) => {
					console.log(d,i)
					const percent = parseFloat(d[1]).toFixed(1);
					const width = `${percent}px`;
					const barStyle = {
						backgroundColor: 'steelblue', 
						display: 'inline-block',
						height: '15px',
						width: width
					}
					
					return (
						<div className='percent-results' key={i}>
							<p className='group'>{`${d[0]}:`} </p>
							<div className='bar-container'>
								<div className='bar' style={barStyle}></div>
								<p className='percent-text'>{`${percent}%`}</p>
							</div>
						</div>
					)
				})
				
			}
		</div>
	);
}

export default Tooltip;

/*
<div>GeoUID: { hoveredFeature.properties.GeoUID }</div>
<div>Population: { hoveredFeature.properties.Population }</div>
<div>Percent: { parseFloat(hoveredFeature.properties.percent).toFixed(1) }</div>
<div>Percentile: { (hoveredFeature.properties.percentile) }</div>
*/