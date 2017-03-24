// current URL
var currentUrl = window.location.pathname;


// Form variables
var userName = document.querySelector('#name');
var email 	= document.querySelector('#email');
var website	= document.querySelector('#website');
var comment = document.querySelector('#comment');
var submit = document.querySelector('input[type="submit"]');

// controler

if(currentUrl == "/Designing-for-Web-Standards/blog.html" || currentUrl == "/FullSail/Designing-for-Web-Standards/blog.html"){

	blogPagination();
}

if(userName !== null && email !== null && website !== null && comment !== null) {

	userName.addEventListener('blur',formValidation);
	email.addEventListener('blur',formValidation);

}



function formValidation(event){

		var field = event.target;
	 	var alert = field.parentElement.querySelector('.alert');
    	var errorMsg = '<p class="alert">This field can not be empty</p>';
   

        if (field.value === "") {
      	
            field.parentElement.insertAdjacentHTML('beforeend', errorMsg);
        }	
         if (alert !== null) {
                alert.remove();
            }         
              

}


// function blogPagination(){
	
// 	var blogArticles = document.querySelector('#post article');

// }