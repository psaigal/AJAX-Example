document.getElementById("AJAX-button").onclick = function() {myFunction()};

var requestObject = new XMLHttpRequest();

requestObject.onreadystatechange = function() {
  if (requestObject.readyState === 4) {
    if (requestObject.status === 200 || requestObject.status === 304) {
      console.log(requestObject.statusText);
      console.log(requestObject.responseText)
    }
  }
}

requestObject.open("POST", http:, true);

requestObject.send();


  document.getElementById("demo").onclick = function(){}
