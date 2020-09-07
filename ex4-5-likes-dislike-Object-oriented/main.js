var Person =function(name,likes){
	this.name = name;
 	this.likes = likes;
	this.addLikes = function(){
		this.likes++;
		updateUI();
	};
	this.removeLikes = function(){
		this.likes--;
			
		updateUI();
		}
}
function addEvents(){
	document.querySelector('#btn-add').addEventListener('click',addPeople);	
	addEventsImg();
}
function addEventsImg(){

	for ( var i=0; i<people.length; i++){
	var imgLike = 'imgLike-'+i;
	var imgDislike = 'imgDislike-'+i;
	document.querySelector('#'+imgLike).addEventListener('click',people[i].addLikes.bind(people[i]));
	document.querySelector('#'+imgDislike).addEventListener('click',people[i].removeLikes.bind(people[i]));
	
	}
		
}
function addPeople(){
		var name = document.querySelector('#input-name').value;
		var likes = 0;
		var p = new Person(name,likes)
		window.people.push(p);
		updateUI();
}

function updateUI(){
	var output="";
	for (var i=0; i<window.people.length; i++){
		output += '<tr><td>'+window.people[i].name +'</td><td>'+ window.people[i].likes +'</td></td><td><img src ="like.ipg" id="imgLike-'+i+'"></td><td><img src ="like.ipg" id="imgDislike-'+i+'"></td></tr>';
		}
	document.querySelector('#table-body').innerHTML = output;
	addEvents();
	
}


function init(){
	window.people =[];
	addEvents();
	updateUI();
	}

init();
