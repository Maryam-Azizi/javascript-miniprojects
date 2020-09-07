function addButtonClick() {
	var name = document.querySelector('#input-name').value;
	var job = document.querySelector('#input-job').value;
	addRow(name,job);
}
function addRow(name,job){
		var tbodyElement = document.querySelector('#tbody-element');
			tbodyElement.innerHTML += '<tr><td>' + name+ '</td><td>'+job+'</td></tr>'; 
}
function addEvent(){
		document.querySelector('#submit').addEventListener('click',addButtonClick);
}
function init(){
	addEvent();
}
init()
