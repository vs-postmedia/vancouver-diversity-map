import React, {PureComponent} from 'react';
import Select from 'react-select'
import Legend from '../Legend/Legend';
import './ControlPanel.css';

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
	render() {
		const Container = this.props.containerComponent || defaultContainer;
		const {settings} = this.props;

		// prep & sort options for select dropdown
		const selectOptions = settings.displayPopulations.map(d => {
			return { value: d, label: d}
		})

		selectOptions.sort((a,b) => { return (a.label > b.label) ? 1 : -1 });

		return (
			<Container>
				<Select 
					// defaultInputValue={'Type to search...'}
					defaultValue={{label: settings.currentView, value:settings.currentView}}
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
<h3>Vancouver’s origins</h3>
<p>Census tracks showing estimated per cent of the population reporting <b>{settings.currentView}</b> origins. Select a tract for more details.</p>
<hr />
*/