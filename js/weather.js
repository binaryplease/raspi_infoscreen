	$.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=50.9382442&lon=6.9531454&units=metric&APPID=2ae98b15583d54661d45ed839f5b1095'
		, function(data){
			generateWeatherChart(data, "w_temp", "w_description", "w_pressure");
		});

	$.getJSON('http://api.openweathermap.org/data/2.5/forecast?lat=50.9382442&lon=6.9531454&units=metric&APPID=2ae98b15583d54661d45ed839f5b1095'
		, function(data){
			generateRainChart(data, "myRainChart", "Regen in mm");
		});

	function generateWeatherChart(data, id_temp, id_desc, id_pressure){

		$( "#" + id_temp ).append(data.main.temp + " °C");
		$( "#" + id_desc ).append(data.weather[0].description);
		$( "#" + id_pressure ).append(data.main.pressure + " hPa");

		console.log(data.weather[0].id.toString()[0]);


		switch (data.weather[0].id.toString()[0]){
			case "2": // Sturm
				$('#weather-icon').css("background-position-x", "853px");
				$('#weather-icon').css("background-position-y", "-110px");
				break;
			case "3": // leichter Regen
				$('#weather-icon').css("background-position-x", "1673px"); 
				$('#weather-icon').css("background-position-y", "-715px");
				break;
			case "5": // Regen
				$('#weather-icon').css("background-position-x", "853px"); 
				$('#weather-icon').css("background-position-y", "-410px");
				break;
			case "5": // Schnee
				$('#weather-icon').css("background-position-x", "853px"); 
				$('#weather-icon').css("background-position-y", "-1020px");
				break;
			case "7": // Nebel
				$('#weather-icon').css("background-position-x", "574px"); 
				$('#weather-icon').css("background-position-y", "-410px");
				break;
			case "8": // Sonne oder Wolken
				if(data.weather[0].id == 800){
					$('#weather-icon').css("background-position-x", "1673px"); //Sonne
					$('#weather-icon').css("background-position-y", "-110px");
				}
				else if(data.weather[0].id == 801 || data.weather[0].id == 802 || data.weather[0].id == 803){
					$('#weather-icon').css("background-position-x", "1673px"); //leicht bewölkt
					$('#weather-icon').css("background-position-y", "-410px");
				}
				else{
					$('#weather-icon').css("background-position-x", "574px"); //bewölkt
					$('#weather-icon').css("background-position-y", "-110px");
				}
				break;
		}
	}

	function generateRainChart(data, id, label){
		var ctx = document.getElementById(id);
		ctx.width = 10;
		ctx.height = 3;
		
		var w_times = [];
		var w_rain = [];

		data.list.forEach(function(entry){
			w_times.push(new Date(entry.dt*1000).getHours() + ":00 h");
			w_rain.push(entry.rain["3h"]);
		});

		console.log(w_rain);

		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: w_times.slice(0,10),
		        datasets: [{
		            label: label,
		            data: w_rain.slice(0,10),
		            backgroundColor: "rgba(0, 184, 204, 0.2)",
		            borderColor: "rgba(0, 184, 204, 1)",
		            borderWidth: 2,
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	}
