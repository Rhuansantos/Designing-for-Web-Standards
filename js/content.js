// Doing the first request
  var objRequest = new XMLHttpRequest();
  objRequest.open('GET', 'data/data.json');
  objRequest.onload = function() {
  
      var objData = JSON.parse(objRequest.responseText);
      console.log(objData);


    // sending obj as parameter to functions
    loadPosts(objData.posts);
    loadProducts(objData.products);     
    
  };

  objRequest.send();



function loadPosts(_data){
    // setting local variables
    var data = _data;
    var container = document.querySelector('#post');
    var posts = '';

    // Checking if the element is on the page
    if(container !== null){

        for (i = 0; i < data.length; i++) {
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

        for (i = 0; i < data.length; i++) {
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

 


