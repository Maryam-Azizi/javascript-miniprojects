function submit(){
	var sentence = document.querySelector('#sentence').value;
	var search = document.querySelector('#search').value;
	
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
	var i = sentence.indexOf(search);
	if (i == -1){
		document.querySelector('#result').innerHTML= "Search not found"
	}
	else{
		getIndexes(sentence,search);
	}
}

function getIndexes(sentence,search){
		var foundIndex= [];
		var searchStart = 0;
		var counter = 0;
		while(true){
			var text = sentence.substring(searchStart);
			var relativeIndex =  text.indexOf(search);
			if (relativeIndex == -1){
				break;
			}
			foundIndex.push(relativeIndex + searchStart);
			searchStart +=  relativeIndex +search.length;
			counter++;
			if (counter>100) return;
		}
		
		document.querySelector('#result').innerHTML+= foundIndex+'  index of your search  ';
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
