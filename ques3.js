
/*var Employee ={

company: 'Rohit' 

}
var Emp1 = Object.create(employee); //var wwe decalare Employee is not matching and it will give error in this line

delete Emp1.company //here we decalring Emp1 but in console we are using emp1 so it will show error in this line

Console.log(emp1.company) //here Console is starting with Capital "C" and it should start with small "c" throw error in this line
*/
/*******************Correct code for given code is ****************************/
var Employee ={  

company: 'Rohit'

}

var emp1 = Object.create(Employee);

delete emp1.company 

console.log(emp1.company) //it will give Rohit as output after correcting the code.

