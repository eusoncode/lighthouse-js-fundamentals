let school = "";
let age = 0;

var schoolChoice = whichSchool(age){
  if (age<13) {
    school += "Elementry School";
  }else if (age>=13 && age<=18) {
    school += "Secondary School";
  }else {
    school += "Lighthouse Labs";
  }
  return school;
};

console.log(schoolChoice);
