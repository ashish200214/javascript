//creating the object.
const student = {
  name: "Ashish",
  age: 21,
  birth: "14-12-2002",
  marks: [21, 55, 155, 122],
};

//accessing the object using . or []
console.log(student.name);
console.log(student.age);
console.log(student.birth);
console.log(student["name"]);

//inserting the key to object using . or [].
student["Gender"] = "Male";
student.id = 1;
console.log(student);

//using for in
for (let key in student) {
  console.log(student[key]);
}

console.log(student.marks[1]);

const objName = new Object();

objName.firstName = "ashish";
objName.lastName = "gavali";
objName.age = 20;


//another method of accessing the keys and values is using the 
//in build method Object.keys() and Object.values();4

console.log(Object.keys(student ));  //this print onlly keys
console.log(Object.values(student));

console.log(Array.isArray(student.marks))  //checking array or not.


const key1 = "objkey1"
const key2="objkey2"

const value1="myvalue1"
const value2="myvalue2"

const obj ={
    key1:"ashish",
    key2:"suyash"

}

console.log(obj)