import React from 'react';
import './Tooltip.css';

const Tooltip = (props) => {
	const {currentView, hoveredFeature, x, y} = props;
	const prop = hoveredFeature.properties

	// we want to ignore these properties
	const blockList = ['GeoUID', 'Population', 'percent', 'percentile', 'Asia', 'Africa', 'Oceania', 'North America', 'Europe', 'Central/South America'];

	// sort & get the top five reported origins
	const tooltipData = Object.keys(prop).map((key, i) => {
		if (!blockList.includes(key)) {
			return [key, prop[key]];
		}
	}).sort((a,b) => {
		return b[1] - a[1];
	}).slice(0,5);
	
	return (
		<div className="tooltip" style={{ left: x, top: y - 50 }}>
			
			<h1 className='current-percent'>{`${parseFloat(hoveredFeature.properties[currentView]).toFixed(1)}%`}</h1>
			<p className='current-view'>{`Report ${currentView} origins`}</p>
			<hr />
			<h4>Top reported origins:</h4>
			
			{
				tooltipData.map((d, i) => {
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
							<p className='group'>{`${d[0].split('/')[0]}:`} </p>
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
