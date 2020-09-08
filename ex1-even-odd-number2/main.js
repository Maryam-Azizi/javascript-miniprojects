function showNumbers(type){
		var htmlCode ="";
		var num1 = parseInt(document.querySelector("#num1").value);
		var num2 = parseInt(document.querySelector("#num2").value);
		for (i = num1; i <= num2; i++){
				if (isOdd(i)){
					if(type=='odd'){
						document.querySelector('#result').innerHTML = htmlCode+= i+ ", " ;
					}
				}else{ // even number
					if(type=='even'){
						document.querySelector('#result').innerHTML = htmlCode+= i+", ";	
					}
				}
	}
}
function isOdd(number){
		  
		var r = number % 2;
		if (r != 0){
			return true
		} 
		
}
function isEven(number){
		  return !isOdd(number);
}
