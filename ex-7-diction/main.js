var dict ={'can':'modal verb',
			'should':'modal verb',
			'might':'modal verb',
			'was':'past simple',
			'were':'past simple',
			'will':'future',
			'has been':'present perfet(passive)',
			'have been':'peresent perfect(passive'//key value pair
	};

function checkSentence(){
	for (var key in dict){
		if (isKeyExists(key)){
			showResult(dict[key]);
			
		}
	}
}

function showResult(output){
	document.getElementById('result').innerHTML= output;
}
function isKeyExists(key){
	var sentence = document.getElementById('input-sentence').value;
	return sentence.indexOf(key) != -1;
}
function addEvent(){
	document.getElementById('btn-grammer').addEventListener('click',checkSentence)
	}

addEvent();
