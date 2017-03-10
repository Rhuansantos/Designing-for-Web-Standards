// Doing the first request
  var objRequest = new XMLHttpRequest();
  objRequest.open('GET', 'data/data.json');
  objRequest.onload = function() {
  
      var objData = JSON.parse(objRequest.responseText);
      console.log(objData);
    
  };

  objRequest.send();


