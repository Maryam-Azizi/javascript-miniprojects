function start(){
	if(window.counter == 60){
		return
		}
	if(!window.isStarted){
		window.counterInterval = setInterval(count,1000);
		window.isStarted = true;
		}

}

function reset(){
	stop();
	window.counter = 0;
	 updateUI();
	
}

function stop(){
	clearInterval(window.counterInterval);
	window.isStarted = false;
}

function count(){
		if(!window.counter){
			window.counter = 1;
		}else{
			window.counter++;
		}
		if(window.counter == 60){
			stop();
		}
	
		updateUI();
}

function addEvent(){
	document.getElementById('btn-start').addEventListener('click', start);
	document.getElementById('btn-reset').addEventListener('click', reset);
	document.getElementById('btn-stop').addEventListener('click', stop);
}

function updateUI(){
	document.getElementById('number').innerHTML = window.counter+"";
}
function init(){
		addEvent();
		
}
init();
