function thanks () {
    let user=document.getElementById("name").value;
    let email=document.getElementById("mail").value;
    let pass =document.getElementById("pass").value;
    alert ("welcome "+user);
    if (user==""){
        alert("please input username");
    }else if(email==""){
        alert("please enter your email");
    }else if(pass==""){
        alert("please input your password");
    }else{
        window.open("application.html");
    }
}