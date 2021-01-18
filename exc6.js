let grade1 = Number(prompt("Enter the  first grade"));
let grade2 = Number(prompt("Enter the second grade"));
let grade3 = Number(prompt("Enter the third grade"));
let grade4 = Number(prompt("Enter the fourth grade"));
let grade5 = Number(prompt("Enter the fifth grade"));
let avg = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;
switch (avg >= 0) {
  case avg > 90:
    alert("Avarage grade: " + avg + "\nGrade : A ");
    break;
  case avg > 80:
    alert("Avarage grade: " + avg + "\nGrade : B ");
    break;
  case avg > 70:
    alert("Avarage grade: " + avg + "\nGrade : C");
    break;
  case avg > 60:
    alert("Avarage grade: " + avg + "\nGrade : D ");
    break;
  default:
    alert("Avarage grade: " + avg + "\nGrade : F ");
    break;
}
