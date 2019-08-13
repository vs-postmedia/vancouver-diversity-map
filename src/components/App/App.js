import React from 'react';
import MAPBOX_TOKEN from '../../data/mapbox-token.js';
import ChoroplethMap from '../ChoroplethMap/ChoroplethMap';
// import LeafletMap from '../LeafletMap/LeafletMap';

import './App.css';


function App() {
	return (
	  	<div className="App">
	  		<ChoroplethMap api_key={MAPBOX_TOKEN}></ChoroplethMap>
	  	</div>
	);
}

export default App;


// <LeafletMap api_key={MAPBOX_TOKEN} data={geoJSON2}></LeafletMap>