 function submitClick() {
    if (formValidation()) {
      alert("Thank you for your time! Your details have been submitted!");
      return true;
    } else {
      return false;
    }
  }

  function formValidation() {
    flag = true;

    if (document.application.aa.value == "") {
      alert("SUBMIT FAILED!!  Please make sure you have filled in all the required details!");
      flag = false;
    }

    // Validate letters only as Name
    if (!/^[a-zA-Z]*$/g.test(document.application.aa.value)) {
      alert("Enter alphabetic characters as Name!");
      flag = false;
    }

    // Validate emails
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)* (\.\w{2,3})+$/.test(myForm.user_email.value)) //Regular expressions to validate email
    {
      alert("Enter Valid Email Address!");
      flag = false;
    }

    // Validate Phone number
    if (document.application.bb == "") {
      alert("Please fill in your Phone Number!");
      flag = false;
    }

    if (!/^[0-9]*$/g.test(application.bb)) {
      alert("Enter numeric values as Phone Number!");
      flag = false;
    }

    if ((document.application.userGender[0].checked == false) && (document.application.userGender[1].checked == false)) {
      alert("Please select your gender!");
      flag = false;
    }

    if (document.application.userAge.selectedIndex == 0) {
      alert("Please select your Age from the drop-down list!");
      flag = false;
    }

    
    return flag;
  }