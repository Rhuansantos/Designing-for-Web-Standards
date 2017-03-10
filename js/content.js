// Doing the first request
  var objRequest = new XMLHttpRequest();
  objRequest.open('GET', 'data/data.json');
  objRequest.onload = function() {
  
      var objData = JSON.parse(objRequest.responseText);

    // sending obj as parameter to functions
    loadIndex(objData.benefits);
    loadPosts(objData.posts);
    loadProducts(objData.products);
    loadEvents(objData.events);   
    
  };

  objRequest.send();

function loadIndex(_data){

// setting local variables
    var data = _data;
    var container = document.querySelector('#benefits ul');
    var benefits = '';

    // Checking if the element is on the page
    if(container !== null){

        for (var i = 0; i < data.length; i++) {
         benefits += '<li>';
         benefits += '<h3>' + data[i].title + '</h3>';
         benefits += '<p>' + data[i].description + '</p>';
         benefits += '</li>';
        }

        // print the html
         container.innerHTML = benefits;
       
    }

}


function loadPosts(_data){
    // setting local variables
    var data = _data;
    var container = document.querySelector('#post');
    var posts = '';

    // Checking if the element is on the page
    if(container !== null){

        for (var i = 0; i < data.length; i++) {
         posts += '<article>';
         posts += '<img src="' + data[i].imageURL + '" alt="">';
         posts += '<h1>' + data[i].title + '</h1>';
         posts += '<p>' + data[i].text + '</p>';
         posts += '</article>';
        }

        // print the html
         container.innerHTML = posts;
       
    }

 }

 function loadProducts(_data) {
    var data = _data;
    var container = document.querySelector('#shop ul');
    var products = '';

     // Checking if the element is on the page
    if(container !== null){

        for (var i = 0; i < data.length; i++) {
         products += '<li>';
         products += '<img src="' + data[i].imageURL + '" alt="">';
         products += '<h1>' + data[i].title + '</h1>';
         products += '<p>' + data[i].description;
         products += '<strong>' + data[i].price + '</strong>';
         products += '</p>';
         products += '</li>';
        }

        // print the html
         container.innerHTML = products;
       
    }

 }


 function loadEvents(_data) {
    var data = _data;
    var container = document.querySelector('#events table tr');
    var dayList = document.querySelector('#events ol');
    var events = '';
    var eventsDate = '';

     // Checking if the element is on the page
    if(container !== null){

        for (var i = 0; i < data.length; i++) {

         events += '<td> <h4>' + data[i].title +'</h4></td>';
         events += '<td> <h4>' + data[i].location +'</h4></td>';
         events += '<td> <p>' + data[i].text +'</p></td>';


         eventsDate += '<li>';
         eventsDate += '<a>' + data[i].date+ '</a>';
         eventsDate += '</li>';


        }

        // print the html
         container.innerHTML = events ;
         dayList.innerHTML = eventsDate;

       
    }

 }
 


