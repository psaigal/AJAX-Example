document.addEventListener("DOMContentLoaded", function(){

	var responseElement = document.getElementById("response");
	var error = document.getElementsByClassName("error")[0];

	var requestObject = new XMLHttpRequest();

	requestObject.onreadystatechange = function() { 
		if(requestObject.readyState === 4) { 
			if(requestObject.status === 200) {
				var response = JSON.parse(requestObject.responseText);
				for (var i = 0; i <= 10; i++) {
					responseElement.innerHTML += 
						"<ul>" + 
							"<li>Company Name: " + response.networks[i].company[0] + "</li>" +
							"<li>City: " + response.networks[i].location.city + "</li>" +
							"<li>Country: " + response.networks[i].location.country + "</li>" +
						"</ul><br>"
				}
			}
			else if(requestObject.status !== 200) {
				error.style.display = "block";
				error.innerHTML = "Sorry there was an error fetching the data";
			}
		}

	}

	requestObject.open("GET", "http://api.citybik.es/v2/networks"); 
	requestObject.send(); 

