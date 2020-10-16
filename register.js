function thanks() {
    if (success()) {
        window.open("application.html");
      return true;
    } else {
      return false;
    }
  }
  function success() {
    flag = true;
    alert ("welcome "+document.provide.ff.value);
    if (document.provide.ff.value == "") {
        alert("please input username");
        
      flag = false;
    }
// Validate letters only as Name
if (!/^[a-zA-Z]*$/g.test(document.provide.ff.value)) {
    alert("Enter alphabetic characters as Name!");
    flag = false;
  }
  if (document.provide.gg.value == "") {
    alert("please input your email");
  flag = false;
}

 
   return flag;
}