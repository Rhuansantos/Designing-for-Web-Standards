// Doing the first request
  var objRequest = new XMLHttpRequest();
  objRequest.open('GET', 'data/data.json');
  objRequest.onload = function() {
  
      var objData = JSON.parse(objRequest.responseText);
      console.log(objData);



    loadPosts(objData.posts);

     
    
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


