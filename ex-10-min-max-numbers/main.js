function minClick(){
	
	values = getValues()
	document.querySelector("#result").innerHTML = "minimum:"+minimum(values[0],values[1],values[2]);
}

function maxClick(){
	values = getValues()
	document.querySelector("#result").innerHTML = "maximum:"+maximum(values[0],values[1],values[2]);
}

function getValues(){
		var x= parseInt(document.querySelector("#num1").value);
		var y= parseInt(document.querySelector("#num2").value);
		var z= parseInt(document.querySelector("#num3").value);
	 return [x,y,z];
	}

function minimum(x,y,z){
	if(x>y){
		var min = y;
	}
	else {var min= x}
	
	if(min>z){
		return z;
	}
	else{ return min;}
		
}
function maximum(x,y,z){
	if(x>y){
		var max = x;
	}
	else {var max=y}
	
	if(max >z){
		return max;
	}
	else{ return z;}
		
}
function addEvent(){
	document.querySelector(".btn-max").addEventListener('click',maxClick);
	document.querySelector(".btn-min").addEventListener('click',minClick);	
}
addEvent();
