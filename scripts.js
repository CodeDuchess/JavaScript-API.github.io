	'use strict';
	const app = document.getElementById("root");
	
	const weather = document.createElement("img");
	weather.src = "weather.jpg";
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	
	app.appendChild(weather);
	app.appendChild(container);
	
	var request = new XMLHttpRequest();
	request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=14d276f4fe655e659ec92149c7cebbec", true);
	
	request.onload = function () {    
	  
	  // Begin accessing JSON data here
	  
	var data = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.weather.forEach(weather => {
	      const card = document.createElement("div");
	      card.setAttribute("class", "card");
	      const h1 = document.createElement("h1");
	      h1.textContent = weather.title;
	
	      const describe = document.createElement("p");
	      weather.description = weather.description.substring(0, 300);
	      describe.textContent = `${weather.description}...`;
		    
	      const main = document.createElement("p");
	      weather.main = weather.main.substring(0, 300);
	      main.textContent = `${weather.main}...`;
		    
	      const temp = document.createElement("p");
	      main.temp = main.temp.substring(0, 300);
	      temp.testContent = `${main.temp}...`;
	
	      container.appendChild(card);
	      card.appendChild(main);
	      card.appendChild(describe);
	      card.appendChild(temp);
	    });
	  } else {
	    const errorMessage = document.createElement("marquee");
	    errorMessage.textContent = `Hug it, it's not working!`;
	    app.appendChild(errorMessage);
	  }
	}

	request.send();

