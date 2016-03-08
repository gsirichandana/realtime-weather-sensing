// google.setOnLoadCallback(drawChart);
	google.setOnLoadCallback(getWeatherFromServer);
	//var testJson = '[{"coord":{"lon":-122.04,"lat":37.37},"sys":{"type":1,"id":451,"message":0.0108,"country":"US","sunrise":1449500986,"sunset":1449535811},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.71,"humidity":87.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":2.6,"deg":null},"clouds":{"all":75},"dt":1449527700,"id":5400075,"name":"Sunnyvale","cod":200,"day":"7 Dec 2015 22:52:48 GMT","timeOfDay":"1449528768856","zipcode":94086},{"coord":{"lon":-122.04,"lat":37.37},"sys":{"type":1,"id":451,"message":0.0108,"country":"US","sunrise":1449500986,"sunset":1449535811},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.71,"humidity":87.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":2.6,"deg":null},"clouds":{"all":75},"dt":1449527700,"id":5400075,"name":"Sunnyvale","cod":200,"day":"7 Dec 2015 22:56:54 GMT","timeOfDay":"1449529014789","zipcode":94086},{"coord":{"lon":-122.04,"lat":37.37},"sys":{"type":1,"id":451,"message":0.0108,"country":"US","sunrise":1449500986,"sunset":1449535811},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.71,"humidity":87.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":2.6,"deg":null},"clouds":{"all":75},"dt":1449527700,"id":5400075,"name":"Sunnyvale","cod":200,"day":"7 Dec 2015 22:52:49 GMT","timeOfDay":"1449528769169","zipcode":94087},{"coord":{"lon":null,"lat":null},"sys":{"type":null,"id":null,"message":null,"country":null,"sunrise":null,"sunset":null},"weather":[null,null,null,null,null,null,null,null],"base":null,"main":{"temp":null,"humidity":null,"pressure":null,"temp_min":null,"temp_max":null},"wind":{"speed":null,"deg":null},"clouds":{"all":null},"dt":null,"id":null,"name":null,"cod":null,"day":null,"timeOfDay":null,"zipcode":95050},{"coord":{"lon":-121.96,"lat":37.35},"sys":{"type":1,"id":451,"message":0.0125,"country":"US","sunrise":1449068698,"sunset":1449103803},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"cmc stations","main":{"temp":null,"humidity":null,"pressure":null,"temp_min":null,"temp_max":null},"wind":{"speed":null,"deg":null},"clouds":{"all":null},"dt":1449089760,"id":5393015,"name":"Santa Clara","cod":200,"day":"2 Dec 2015 21:57:49 GMT","timeOfDay":"1449093469418","zipcode":95050},{"coord":{"lon":-121.96,"lat":37.35},"sys":{"type":1,"id":480,"message":0.0422,"country":"US","sunrise":1449500963,"sunset":1449535795},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5393015,"name":"Santa Clara","cod":200,"day":"7 Dec 2015 22:50:39 GMT","timeOfDay":"1449528639389","zipcode":95050},{"coord":{"lon":-121.96,"lat":37.35},"sys":{"type":1,"id":480,"message":0.0422,"country":"US","sunrise":1449500963,"sunset":1449535795},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5393015,"name":"Santa Clara","cod":200,"day":"7 Dec 2015 22:52:49 GMT","timeOfDay":"1449528769502","zipcode":95050},{"coord":{"lon":-121.96,"lat":37.35},"sys":{"type":1,"id":480,"message":0.0422,"country":"US","sunrise":1449500963,"sunset":1449535795},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5393015,"name":"Santa Clara","cod":200,"day":"7 Dec 2015 22:52:50 GMT","timeOfDay":"1449528770968","zipcode":95051},{"coord":{"lon":-121.96,"lat":37.35},"sys":{"type":1,"id":480,"message":0.0422,"country":"US","sunrise":1449500963,"sunset":1449535795},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5393015,"name":"Santa Clara","cod":200,"day":"7 Dec 2015 22:52:51 GMT","timeOfDay":"1449528771260","zipcode":95053},{"coord":{"lon":-121.98,"lat":37.43},"sys":{"type":1,"id":451,"message":0.0041,"country":"US","sunrise":1449500981,"sunset":1449535787},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.6,"humidity":93.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":3.6,"deg":10.0},"clouds":{"all":90},"dt":1449525360,"id":5323631,"name":"Alviso","cod":200,"day":"7 Dec 2015 22:50:39 GMT","timeOfDay":"1449528639742","zipcode":95054},{"coord":{"lon":-121.98,"lat":37.43},"sys":{"type":1,"id":451,"message":0.0041,"country":"US","sunrise":1449500981,"sunset":1449535787},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.6,"humidity":93.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":3.6,"deg":10.0},"clouds":{"all":90},"dt":1449525360,"id":5323631,"name":"Alviso","cod":200,"day":"7 Dec 2015 22:52:51 GMT","timeOfDay":"1449528771550","zipcode":95054},{"coord":{"lon":-121.89,"lat":37.34},"sys":{"type":1,"id":480,"message":0.0116,"country":"US","sunrise":1449500945,"sunset":1449535780},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5392171,"name":"San Jose","cod":200,"day":"7 Dec 2015 22:50:40 GMT","timeOfDay":"1449528640040","zipcode":95110},{"coord":{"lon":-121.89,"lat":37.34},"sys":{"type":1,"id":480,"message":0.0116,"country":"US","sunrise":1449500945,"sunset":1449535780},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5392171,"name":"San Jose","cod":200,"day":"7 Dec 2015 22:52:51 GMT","timeOfDay":"1449528771825","zipcode":95110},{"coord":{"lon":-121.95,"lat":37.29},"sys":{"type":1,"id":480,"message":0.0042,"country":"US","sunrise":1449500951,"sunset":1449535803},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.75,"humidity":77.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":1.08,"deg":327.501},"clouds":{"all":90},"dt":1449525360,"id":5333689,"name":"Campbell","cod":200,"day":"7 Dec 2015 22:52:52 GMT","timeOfDay":"1449528772143","zipcode":95117},{"coord":{"lon":-121.92,"lat":37.32},"sys":{"type":1,"id":451,"message":0.0035,"country":"US","sunrise":1449500949,"sunset":1449535791},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.85,"humidity":87.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":2.6,"deg":null},"clouds":{"all":75},"dt":1449527700,"id":5331587,"name":"Buena Vista","cod":200,"day":"7 Dec 2015 22:50:44 GMT","timeOfDay":"1449528644761","zipcode":95126},{"coord":{"lon":-121.92,"lat":37.32},"sys":{"type":1,"id":451,"message":0.0035,"country":"US","sunrise":1449500949,"sunset":1449535791},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":701,"main":"Mist","description":"mist","icon":"50d"}],"base":"cmc stations","main":{"temp":288.85,"humidity":87.0,"pressure":1025.0,"temp_min":287.15,"temp_max":291.15},"wind":{"speed":2.6,"deg":null},"clouds":{"all":75},"dt":1449527700,"id":5331587,"name":"Buena Vista","cod":200,"day":"7 Dec 2015 22:52:52 GMT","timeOfDay":"1449528772462","zipcode":95126}]';
	var setGraphData = {
		features : []
	};	
	var geoJSON = {
		//type: "FeatureCollection",
		features: []
	};
    function resetGraphData(){
		setGraphData = {
			features : []
		}
	}
	function resetData() {
		geoJSON = {
			type: "FeatureCollection",
			features: []
		}
	}
	function jsonToGeoJson(weatherItem) {
		console.log(JSON.stringify(weatherItem.day));
		 var feature = {
		 /* type: "Feature",
		  properties: { */
				sunrise : weatherItem.sys.sunrise,
				sunset : weatherItem.sys.sunset,
				//main : weatherItem.weather[0].main, //array
				//main_description : weatherItem.weather[0].description, //array
				//main_icon : weatherItem.weather[0].icon, //array
				temp_min : (weatherItem.main.temp_min-273.15),
				temp_max : (weatherItem.main.temp_max-273.15),
				base : weatherItem.base,
				temp : (weatherItem.main.temp-273.15),
				humidity : weatherItem.main.humidity,
				pressure : weatherItem.main.pressure,
				wind_speed : weatherItem.wind.speed,
				wind_deg : weatherItem.wind.deg,
				clouds : weatherItem.clouds.all,
				dt : weatherItem.dt,
				id : weatherItem.id,
				name : weatherItem.name,	
				cod: weatherItem.cod,
				day : weatherItem.day,
				//timeOfDay : weatherItem.timeOfDay,
				zipcode : weatherItem.zipcode
			//}
		};
		return feature;
	}
	function getWeatherFromServer() {
		var requestString = "http://52.33.113.43:8080/FinalProject281Server/graph/city/SanJose";
				request = new XMLHttpRequest();
				request.open("get", requestString, false);
				request.setRequestHeader("Access-Control-Allow-Origin","*");
	  			request.withCredentials = "true";
				request.send(); 
		
		//var results = JSON.parse(testJson);
		var results = JSON.parse(request.responseText);
		console.log(JSON.stringify(results));
		if (results.length > 0) {
			resetData();
			
			for (var i = 0; i < results.length; i++) {
			console.log(jsonToGeoJson(results[i]));
				geoJSON.features.push(jsonToGeoJson(results[i]));
			}
		}
		console.log(geoJSON.features);
		if (geoJSON.features.length > 0) {
			resetGraphData();
			//setGraphData.features.push(['Time', 'Temperature', 'Min Temperature','Max Temperature']);
			for (var i = 0; i < geoJSON.features.length; i++) {
				//console.log(geoJSON.features[i]);
				
				//if(geoJSON.features[i].dt != null){
					console.log(JSON.stringify(geoJSON.features[i]));		
								
					console.log(geoJSON.features[i].day, geoJSON.features[i].temp, geoJSON.features[i].temp_min, geoJSON.features[i].temp_max);
					if( geoJSON.features[i].temp > 0  && geoJSON.features[i].temp_min > 0 && geoJSON.features[i].temp_max > 0 ){
						setGraphData.features.push([geoJSON.features[i].day, geoJSON.features[i].temp, geoJSON.features[i].temp_min, geoJSON.features[i].temp_max]);
						console.log(setGraphData.features[i]);
					}
				//}
			}
			drawChart3();
			
		}
		console.log(setGraphData.features);
	}

    function drawChart3() {
 		//getWeatherFromServer();
         
		var data3 = new google.visualization.DataTable();
		data3.addColumn('string','Day');
		data3.addColumn('number','Temperature');
		data3.addColumn('number','MinTemp');
		data3.addColumn('number','MaxTemp');
		data3.addRows(setGraphData.features);
		console.log(setGraphData.features);
        var options3 = {
          title: 'Temperature',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart3 = new google.visualization.LineChart(document.getElementById('curve_chart_temp'));

        chart3.draw(data3, options3);
    }