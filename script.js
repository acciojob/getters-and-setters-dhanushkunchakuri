//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	set age(newage){
		this._age=newage;
	}
	
}

class Student extends Person {
	study(){
		console.log(this.name +"is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name +"is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
let s=new Person("john",25);
console.log(s.name);
s.age=30;
console.log(s.age);

let s1=new Student("john",30);
s1.study();

let tea=new Teacher("john",30);
tea.teach();


