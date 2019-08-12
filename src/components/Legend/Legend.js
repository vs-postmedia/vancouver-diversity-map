import React from 'react';
import Aux from '../Aux/Aux';
import './Legend.css';

const Legend = (props) => {
	const {colorStops, thresholds } = props.settings;

	return (
		<div className="legend">
			<h4>Per cent of population</h4>
			<div className='color-bar'>	
				{
					thresholds.map((d, i) => {
						if (d === undefined) { return }
						return (
							<div className='swatch' key={i} style={{
								backgroundColor: colorStops[i],
								border: '1px solid #FFFFFF',
								height: '10px',
								width: '30px'
							}}>
								<p className='legend-label'>{`${Math.floor(d)}%`}</p>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}

export default Legend;