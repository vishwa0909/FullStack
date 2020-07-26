function myfun() {
  var result = "";
  result += validateName();
  result += validateId();
  result += validateEmail();
  if (result == "") return true;
  else alert("Validation Result:\n\n" + result);
  return false;
}
function validateName() {
  var name = document.getElementById("us").value;
  if (name.length <= 3) return "Name should be at least three characters.\n";
  else return "";
}
function validateId() {
  var i = document.getElementById("idd").value;
  var i1 = /^[2][2][1][7][1][0][3][0-9]{2}[0-9]{3}$/;
  if (i1.test(i)) {
    return "";
  } else return "Enter correct ID in GITAM format.\n";
}
function validateEmail() {
  var email = document.getElementById("em").value;
  var emm = /^[a-zA-z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;

  if (emm.test(email)) {
    return "";
  } else return "Enter Correct Email.\n";
}
function myFunction() {
  document.getElementById("f1").reset();
}
