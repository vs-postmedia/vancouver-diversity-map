import React, {PureComponent} from 'react';
import Select from 'react-select'
import Legend from '../Legend/Legend';
import './ControlPanel.css';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
	render() {
		const Container = this.props.containerComponent || defaultContainer;
		const {settings} = this.props;

		// prep options for select dropdown
		const selectOptions = settings.displayPopulations.map(d => {
			return { value: d, label: d}
		}).sort((a,b) => (a.label > b.label) ? 1 : -1);

		return (
			<Container>
				<h3>Interactive GeoJSON</h3>
				<p>Census tracks showing per cent of population claiming <b>{settings.currentView}</b> ancestry. Hover over a
				  state to see details.</p>
				<hr />
				<Select 
					defaultValue={'Type to search...'}
					isClearable
					isSearchable
					options={selectOptions} 
					onChange={e => this.props.onChange(e)}
				/>
				
				<Legend settings={settings}></Legend>
			</Container>
		);
	}
}

/*
{
	settings.displayPopulations.map((d, i) => {
		// console.log(d, i)
		return (
			<Select 
				defaultValue={'Select...'}
				isClearable
				isSearchable
				options={selectOptions} 
				onChange={e => this.props.onChange(e.target.id)}
			/>
			// <button 
			// 	id={d} 
			// 	key={i}
			// 	onClick={e => this.props.onClick(e.target.id)}
			// >{d}</button>
		)
	})
}
*/