import React, {PureComponent} from 'react';
import Legend from '../Legend/Legend';
import './ControlPanel.css';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
	render() {
		const Container = this.props.containerComponent || defaultContainer;
		const {settings} = this.props;

		return (
			<Container>
				<h3>Interactive GeoJSON</h3>
				<p>Census tracks showing per cent of population claiming <b>{settings.currentView}</b> ancestry. Hover over a
				  state to see details.</p>
				<hr />

				{
					settings.displayPopulations.map((d, i) => {
						return (
							<button 
								id={d} 
								key={i}
								onClick={e => this.props.onClick(e.target.id)}
							>{d}</button>
						)
					})
				}
				<Legend settings={settings}></Legend>
			</Container>
		);
	}
}

