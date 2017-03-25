
window.onload = function(){


// current URL
var currentUrl = window.location.pathname;


// Form variables
var userName = document.querySelector('#name');
var email 	= document.querySelector('#email');
var website	= document.querySelector('#website');
var comment = document.querySelector('#comment');
var submit = document.querySelector('input[type="submit"]');


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



var products = 1;

function addCart(event){


	var element = "<h4>" + products++ + "</h4>";	

	var target = event.target;
    var parent = target.parentElement;
    var myCart = document.querySelector('.my-cart');
    var number = document.querySelector('#number');
   


 	number.insertAdjacentHTML('beforeend', element);

 	

}



var buttonAddCart = document.querySelectorAll('.add-to-cart');

 for (var i = 0; i < buttonAddCart.length; i++) {
        var button = buttonAddCart[i];
        button.addEventListener('click', addCart);
        console.log(button);
    }




};



