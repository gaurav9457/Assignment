function validation() {
    
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let dob=document.getElementById("dob").value;
    let  age=document.getElementById("age").value;
    let country=document.getElementById("country").value;
    // let gender = document.querySelector('input[name="gender"]:checked').value;

    let checkbox = document.getElementsByName('Skills');
    let selectedSkills = [];
    
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selectedSkills.push(checkbox[i].value);
        }
    }
    
    // console.log(fname," ",lname," ",email," ",mobile," ",dob," ",age," ",country," ",gender," ",selectedSkills);

    let pattern=/^[A-Za-z]+$/;
    let num=/\d/;
    let validemail=/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
    let count=/\d{10}$/;
    let dobvalidate= /\d{1,2}\/\d{1,2}\/\d{2,4}/;
    let ageCount=/\d{1,2}$/;

    if (fname=="") {
        alert("first name is mandatory");
    } 
    else if(num.test(fname)){
        alert("First name not contain the numbers")
    }
    else if(lname=="") {
        alert("last name is mandatory");
    }
    else if(num.test(lname)){
         alert("last name not contain numbers")
    }
    else if(email==""){
        alert("email id is mandatory");
    }
    else if (!validemail.test(email)) {
        alert("Enter a proper email id");
    }
    else if(mobile==""){
        alert("Please enter mobile number");
    }
    else if(!count.test(mobile)){
        alert("Enter 10 digit mobile no");
    }
    else if(!dobvalidate.test(dob)){
        alert("Dob in dd/mm/yyyy");
    }
    else  if(age==""){
        alert("Age is  mandatory");
    }
    else if(!ageCount.test(age)){
        alert("Enter 2 digit age");
    }
    else{
        alert("submitted");
    }
}
