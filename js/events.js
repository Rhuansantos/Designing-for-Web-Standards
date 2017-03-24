var userName = document.querySelector('#name');
var email 	= document.querySelector('#email');
var website	= document.querySelector('#website');
var comment = document.querySelector('#comment');

function formValidation(event){

		var field = event.target;
    	var errorMsg = '<p class="alert">This field can not be empty</p>';


        if (field.value === "") {
      	
            field.parentElement.insertAdjacentHTML('beforeend', errorMsg);
              
        }

      


}

userName.addEventListener('blur',formValidation);
email.addEventListener('blur',formValidation);
website.addEventListener('blur',formValidation);
comment.addEventListener('blur',formValidation);