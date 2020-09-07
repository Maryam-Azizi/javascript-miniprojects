function BMI(){
		var form = document.forms.bmi;
		var height = form.height.value;
		var weight = form.weight.value;
		var BMI = weight/(height*height);
		document.querySelector('.result').innerHTML = ""+
		BMI;
}
function addEvent(){
	document.querySelector('.btn-bmi').addEventListener('click',BMI)
}
addEvent();
