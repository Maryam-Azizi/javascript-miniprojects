function checkEmail(email){
if (email.indexOf('@[') == -1){
	console.log ('wrong email');
	}  else{
		alert('corret');
		}
}
function submit(){
	var sentence = document.querySelector('#sentence').value;
	var search = document.querySelector('#search').value;
	var i = sentence.indexOf(search);
	var hasErrors = false;
	if (search.trim().length == 0){
		  addDangerAlert('Search is empty'); 
		  hasErrors = true;
		}
	if (sentence.trim().length == 0){
		 addDangerAlert('Sentence is empty');
		 hasErrors = true; 
	}
	
	if (hasErrors) return;
	
		
	
	if (i == -1){
		document.querySelector('#result').innerHTML= "Search not found"
	}
	else{
			var output = sentence.substring(0,i)+'<strong>'+search+ '</strong>'+sentence.substring(i+search.length);
    
			document.querySelector('#result').innerHTML= output;
		}
}
function addEvent(){
	document.querySelector('#btn-search').addEventListener('click',submit);
}

function addDangerAlert(massage){
		var alertHtml = '<div class="alert alert-danger alert-dismissable alert" role="alert">'+
		massage +'<button type="button" class="close" data-dismiss="alert"> X </button></div>';
		document.querySelector('#result').innerHTML += alertHtml;
}

function init(){
		addEvent();
}
init();
