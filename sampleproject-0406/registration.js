function validate() {
  var result = "";
  result += validateName();
  result += validateId();
  result += validatedob();
  result += validated();
  result += validatemb();
  result += validateEmail();
  result += validatePassword();
  result += validateTerms();

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
function validatedob() {
  var d = document.getElementById("dt").value;
  var reg = /^(0[1-9]|[1-2][0-9]|3[0-1])[/](0[1-9]|1[1-2])[/]([19|20][0-9]{3})$/;
  if (reg.test(d)) {
    return "";
  } else return "Enter Valid DOB in dd/mm/yyyy Format.\n";
}
function validatemb() {
  var mb = document.getElementById("ph").value;
  var g = /^[6-9][0-9]{9}$/;
  if (g.test(mb)) {
    return "";
  } else {
    return "Enter Valid Mobile number.\n";
  }
}

function validatePassword() {
  var password = document.getElementById("ps").value;
  var retype = document.getElementById("rps").value;
  var pss = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  if (pss.test(password)) {
    return "";
  }
  if (password != retype) {
    return "Passwords do not match.\n";
  } else
    return "Password should be at least 6 characters and should have atleast 1Uppercase letter, Special chars and digits\n";
}

function validateEmail() {
  var email = document.getElementById("em").value;
  var retype = document.getElementById("rem").value;
  var emm = /^[a-zA-z0-9._-]{6,12}[@][a-z]{3,15}[.][a-z]{2,6}$/;

  if (emm.test(email)) {
    return "";
  }
  if (email != retype) {
    return "Email addresses do not match.\n";
  } else return "Enter Correct Email.\n";
}
function validateTerms() {
  var terms = document.getElementById("cb").value;
  if (!terms.checked)
    return "Please accept the Terms of Service and Privacy Policy.\n";
  else return "";
}

function validated() {
  po = document.getElementById("pd").value;
  jo = document.getElementById("jd").value;
  if (po - jo <= 4) {
    return "";
  } else return "Your Passes out .\n";
}
function myFunction() {
  document.getElementById("f1").reset();
}
