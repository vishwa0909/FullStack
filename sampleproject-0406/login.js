function validate() {
  var result = "";
  result += validateEmail();
  result += validatePassword();

  if (result == "") return true;
  document.getElementById("o").innerHTML = result;
  return false;
}
function validateEmail() {
  var reg1 = /^[a-zA-z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;
  var uid = document.getElementById("em").value;
  if (reg1.test(uid)) {
    return "";
  } else return "enter correct email id\n";
}
function validatePassword() {
  var reg2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  var psd = document.getElementById("ps").value;
  if (reg2.test(psd)) {
    return "";
  } else return "enter correct password\n";
}
function myFunction() {
  document.getElementById("f1").reset();
}
