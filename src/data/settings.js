const SETTINGS = {
	dataUrl: './data/choropleth-data-selectpops.geojson',
	colors: ['#A7A9AB','#D4DAEA','#AFBEDB','#829DC7','#6D8EBF','#3C76B0','#0062A3', 'darkblue'],
	thresholds: [0.1, 5, 10, 25, 35, 50, 75], // needs to match the number of items in colours
	displayPopulations: ['Filipino','Iranian','Indian','Chinese','Korean','Japanese','Central','British Isles','First Nations/Métis/Inuit'],
	displayPopulations_top15: ['Chinese','English','Scottish','Canadian','Irish','Indian','German','French','Filipino','Ukranian','Italian','Dutch','Polish','Russian','Korean'],
	displayPopulations_select: ['Chinese','English','Scottish','Irish','Indian','German','French','Filipino','Ukranian','Italian','Dutch','Korean', 'Iranian', 'First Nations/Métis/Inuit']
	
}

export default SETTINGS;