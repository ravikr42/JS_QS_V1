var person = {
	firstName:"Ravi", 
	lastName: "Kumar"
};

console.log(person);
console.log("Type of person: "+typeof(person));
person = null;
console.log("Type of person: "+typeof(person));
console.log("Value of Person: "+person);

person = undefined; // This will change value and type of person to undefined

console.log("Type of person: "+typeof(person));
console.log("Value of Person: "+person);

// Undefied 

var car;
console.log("Type of Car: "+car);
console.log("Value of car: "+car);


let value;
console.log("Type of value: "+typeof(value));
console.log("Value of value: "+value);

value = "JavaScript";
console.log("Type of value: "+typeof(value));
console.log("Value of value: "+value);

value = 5;
console.log("Type of value: "+typeof(value));
console.log("Value of value: "+value);

value = null;
console.log("Type of value: "+typeof(value));
console.log("Value of value: "+value);

value = undefined;
console.log("Type of value: "+typeof(value));
console.log("Value of value: "+value);