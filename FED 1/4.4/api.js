var request = new XMLHttpRequest();

request.open('GET', 'https://bedos-jip-ca-servers.onrender.com/products');

request.onload = function() {
   var response = request.response
   var parsedData = JSON.parse(response);
   console.log(parsedData);
}

request.send();