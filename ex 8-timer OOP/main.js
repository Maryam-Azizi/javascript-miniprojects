function Timer(numberOfSecond,element){
		this.numberOfSecond= numberOfSecond;
		this.element = element;
		this.counter = 0;
		this.isStarted = false;
		this.start= start;
		this.reset = reset;
		this.stop = stop;
		this.count = count;
		this.updateUI = updateUI;
		this.setupEvent = setupEvent;
		
		this.setupEvent();
		
		function start(){
			if (this.counter >= this.numberOfSecond) return;
			if (!this.isStarted){
				this.counterInterval = setInterval(this.count.bind(this),1000);
				this.isStarted = true;
				};
		}
		function reset(){
			this.counter = 0;
			this.isStarted = false;
			this.updateUI();
			this.stop();
			
		}
		function stop(){
			clearInterval(this.counterInterval);
			this.isStarted = false;
		}
		function count(){
			this.counter++;
			if(this.counter == this.numberOfSecond){
			this.stop();	
			}
			this.updateUI();
		}
		
		function updateUI(){
			this.element.querySelector('.number').innerHTML= this.counter+"";
			
		}
		function setupEvent(){
			this.element.querySelector('.start').addEventListener('click',this.start.bind(this));
			this.element.querySelector('.stop').addEventListener('click',this.stop.bind(this));
			this.element.querySelector('.reset').addEventListener('click',this.reset.bind(this));
		}
}


function init(){
		var elm1 = document.querySelector('.timer1');
		window.timer1 = new Timer(60,elm1);
		var elm2 = document.querySelector('.timer2');
		window.timer2 = new Timer(30,elm2);
		var elm3 = document.querySelector('.timer3');
		window.timer3 = new Timer(90,elm3);
	}
init();
