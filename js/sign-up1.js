
function validation() {
    var fName = document.forms["signUpContainer"]["firstName"].value;

    if(fName == "") {
      window.alert("Error: Input is empty!");
      firstName.focus();
      return false;
    
    }else{
        return true;
    }

}

function store() {

    if(validation(true)) {
    var name = document.getElementById('firstName').value;
    localStorage.setItem('firstName', name);

    window.location = "sign-up2.html"

    }

}