function convertGrade(number){
	if (number >= 101){
		alert('write correct grade')
		}
	if (number >= 90){
		return 'A'
		}
	if (number >= 80){
		return 'B'
		}
	if (number >= 70){
		return 'C'
		}
	if (number >= 60){
		return 'D'
		}
		return 'F'
	}
function submitGrade(){
	var grade = parseInt(document.querySelector('.input-grade').value);
	document.querySelector('.result').innerHTML = convertGrade(grade);
	}
function addEvent(){
	document.querySelector('.btn-submit').addEventListener('click',submitGrade);
	}
function init(){
	addEvent();
	}
init();
