import React from 'react';
import MAPBOX_TOKEN from '../../data/mapbox-token.js';
import ChoroplethMap from '../ChoroplethMap/ChoroplethMap';

import './App.css';


function App() {
	return (
	  	<div className="App">
	  		<header>
	  			<h1>The places we come from</h1>
	  			<p>The map below highlights the distribution of several of the most common responses in the Lower Mainland to the question of ethnic origin on the 2016 census.</p>
	  			</header>
	  		<ChoroplethMap api_key={MAPBOX_TOKEN}></ChoroplethMap>
	  	</div>
	);
}

export default App;

