const SETTINGS = {
	dataUrl: './data/choropleth-data-selectpops.geojson',
	// colors: ['#A7A9AB','#D4DAEA','#AFBEDB','#829DC7','#6D8EBF','#3C76B0','#0062A3', 'darkblue'],
	colors: [
		'#A7A9AB',
		'#f1eef6',
		'#d0d1e6',
		'#a6bddb',
		'#74a9cf',
		'#3690c0',
		'#0570b0',
		'#034e7b'
	], // colorbrewer blues
	thresholds: [0.1, 5, 10, 25, 35, 50, 75], // needs to match the number of items in colours
	displayPopulations: ['Filipino','Iranian','Indian','Chinese','Korean','Japanese','Central','British Isles','First Nations/Métis/Inuit'],
	displayPopulations_top15: ['Chinese','English','Scottish','Canadian','Irish','Indian','German','French','Filipino','Ukranian','Italian','Dutch','Polish','Russian','Korean'],
	displayPopulations_select: ['Chinese','English','Scottish','Irish','Indian','German','French','Filipino','Ukranian','Italian','Dutch','Korean', 'Iranian', 'First Nations/Métis/Inuit']
	
}

export default SETTINGS;