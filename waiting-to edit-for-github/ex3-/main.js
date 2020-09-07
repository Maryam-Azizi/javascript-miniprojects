var employee = {firstName: 'Maryam',
					lastName:'Azizi',
					car: { model: 'Ford',
						year: 2003
						}
}
var getCarInfo = function(){
		return employee.car.year ;
}
getCarInfo();

var student = {stuNumber:901324,
				course:{nameCourse:'math',
						grade:18
					},
				examDate: {midTerm:'12/2/1390',	
							final:'3/4/1391'
					}
}

var job = {nameJob : 'teacher',
			workHours:{inSummer: '3hours a day',
						inSemester:'8hours a day',
						durringHolidays: 0
					},
			salary:{school:2000,
					highSchool:3000,
					university:4000
				}
	
}
