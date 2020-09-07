function isOdd(number){
		  
		var r = number % 2;
		if (r != 0){
			return true
		} 
		else{
			return false
		}
}
function isEven(number){
		  return !isOdd(number);
}
function showOddNumbers(){
	
	var htmlCode="";
	var number1 = parseInt(document.querySelector("#number1").value);
	var number2 = parseInt(document.querySelector("#number2").value);
	for (var i= number1; i<= number2; i++){
		if (isOdd(i)){
			
			htmlCode+= i+ ", " ;
		}
		
	}
	document.querySelector("#result").innerHTML = htmlCode;
}
function showEvenNumbers(){
	
	var htmlCode="";
	var number1 = parseInt(document.querySelector("#number1").value);
	var number2 = parseInt(document.querySelector("#number2").value);
	for (var i= number1; i<= number2; i++){
		if (isEven(i)){
			
			htmlCode+= i+ ", " ;
		}
		
	}
	document.querySelector("#result").innerHTML = htmlCode;
}
