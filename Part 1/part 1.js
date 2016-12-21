//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
    that each one have the following attributs:
    - name - age - education - nationality

  a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

  b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
    showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

  c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
var student1={name:"Mohammed",age:24,education:"computer engineering",nationality:"Jordanian"}
var student2=makeStudent("Ahmed",24,"computer engineering","Jordanian");
var student3=makeStudent("Kamal",26,"Physics","Syrian");
var AllStudent=[student1,student2,student3]


function makeStudent(name,age,education,nationality){
  return{
    name:name,
    age:age,
    education:education,
    nationality:nationality
  };
}

function showFriend(frinedData){
  return frinedData.name +"  with the age of "+frinedData.age+ " and with "+frinedData.education+" education ."
}


function avergeStudents(){
  var sum=0;
  for(var i=0;i<AllStudent.length;i++){
    sum =sum+AllStudent[i].age;
  }
  return sum/(AllStudent.length)
}




/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
  in order to square the numbers create a function called square and call it inside rangeSquared function
  rangeSquared(2)// [4];
  rangeSquared(3) // null
  rangeSquared(2,10)// [4,16,36,46,100];
*/
// write your code here ...

function rangeSquared(x,y){
  var result=[];
   if (y === undefined && x%2 !== 0  ){
      return null; 
  }
  if (y === undefined && x%2 === 0  ){
      result.push(square(x)); 
  }

  for (var i=x;i<=y;i++){
    if(i%2 === 0){
      result.push(square(i));
    }
  }
  return result;

}

function square(element){
  return element *element;
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
  Example:
  leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leader(array){
  var result =[];
  var lea=array[0]
  var x;
  for (var i=0;i<array.length;i++){
    for(var j=1;j<array.length;i++){
      if(i<array[j]){
        array=array.slice(i)
        break;
      }
    }
    result.push(array[i]);
  }
  return result;
}
