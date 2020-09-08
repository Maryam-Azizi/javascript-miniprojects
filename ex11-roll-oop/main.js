
function Roller(){
	this.history = [];
	this.frequencies = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0};
	this.roll = roll;
	this.getLast = getLast;
	this.getFrequenciesPercentage = getFrequenciesPercentage;
	
	function roll(){
		var dice = 1 + Math.round(Math.random()*5.99 -0.49);
		this.history.push(dice);
		this.frequencies[dice]++;
		return dice;
		}
		
	function getLast(){
		return this.history[this.history.length-1];
		}
		
	function getFrequenciesPercentage(){
		var sum = 0;
		for (var dice in this.frequencies){
			sum += this.frequencies[dice];
		}
		var frequenciesPercentage ={};
		for (var dice in this.frequencies){
			frequenciesPercentage[dice] = this.frequencies[dice]*100/sum;
			}
			return frequenciesPercentage;
		}
}




function updateTable(){
	var frequence = roller.frequencies;
	var frequencePercent = roller.getFrequenciesPercentage();
	var output ="";
	for (var dice=1; dice <= 6; dice++){
		output += '<tr><td>'+ dice +'</td><td>'+ frequence[dice] +'</td><td>'+frequencePercent[dice]+'</td></tr>';
		}
	document.getElementById('table-body').innerHTML = output;
}

function rollClick(){
			var dice = roller.roll();
			document.getElementById('dice').innerHTML='<img src="img/Dice-'+dice+'.png" class="img-property">';
			updateTable();
}


function init(){
		window.roller = new Roller();
		document.getElementById('btn-roll').addEventListener('click',rollClick);
}

init();
