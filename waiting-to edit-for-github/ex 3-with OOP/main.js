function Employee(firstName, lastName,carModel,carYear,Salary){
	this.firstName =firstName;
	this.lastName =lastName;
	this.car={
		model:carModel,
		year:carYear
		};
	this.Salary = Salary
	
	this.getCarModel = getCarModel;
	function getCarModel(){
		return this.car.model+ ' belong to  '+ this.firstName; 
		}
}
var employee1 = new Employee('Sara','Abd','Ford',2000,3500);


function PersonInfo(name, weight, height, gender,age){
	this.name = name;
	this.weight = weight;
	this.height = height;
	this.gender = gender;
	this.age = age;
	this.BMI = BMI;
	function BMI(){
			return this.height/this.weight;
		}
	
}
var person1 = new PersonInfo('Sara',11,98,'female',3);
var person2 = new PersonInfo('Ehsan',60,170,'male',32);
