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


          if (i == 2) {
                    benefits +=  '<form>';
                    benefits +=  '<p><label for="email">email:</label></p>';
                    benefits +=  '<p><input type="text" placeholder="name@example.com" name="email"></p>';
                    benefits +=  '<p><button type=submit>sing up</button></p>'
                    benefits +=  '</form>';

                    
                }
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
         products += '<li class="sale">';
         products += '<img src="' + data[i].imageURL + '" alt="">';
         products += '<p class="rating" data-rating="'+ data[i].rating +'"><meter min="0" max="5" value="'+ data[i].rating +'"></meter></p>';
         products += '<h1>' + data[i].title + '</h1>';
         products += '<p>' + data[i].description;
         products += '<strong>' + '$' + data[i].price + '</strong>';
         products += '</p>';
         products += '<button class="add-to-cart">ADD TO CART</button>';
         products += '</li>';
        }

        // print the html
         container.innerHTML = products;
       
    }

 }


 function loadEvents(_data) {
    var data = _data;
    var container = document.querySelector('#events table');
    var dayList = document.querySelector('#events ol');
    var events = '';
    var eventsDate = '';

     // Checking if the element is on the page
    if(container !== null){

       events +=  '<td><h1>Title</h1></td>';
       events +=  '<td><h1>Location</h1></td>';
       events +=  '<td><h1>Description</h1></td>';

        for (var i = 0; i < data.length; i++) {


         events += '<tr>';
         events += '<td> <h2>' + data[i].title +'</h2></td>';
         events += '<td> <h2>' + data[i].location +'</h2></td>';
         events += '<td> <p>' + data[i].text +'</p></td>';
         events += '</tr>';


         eventsDate += '<li>';
         eventsDate += '<a>' + data[i].date+ '</a>';
         eventsDate += '</li>';


        }

        // print the html
         container.innerHTML = events ;
         dayList.innerHTML = eventsDate;

       
    }

 }
 


