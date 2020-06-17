function con_employe(firstName, lastName,
  id,
  grade,
  gender, ) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.grade = grade;
  this.gender = gender;

}

var e1 = new con_employe('Jnana Prakash', 'Pinisetti', 'E-001', 'A+', "Male");


document.querySelector("#emp").innerHTML = e1.gender

for (var i = 0; i <= 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100) 
}