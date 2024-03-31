function validation() {
    
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let mobile=document.getElementById("mobile").value;
    let dob=document.getElementById("dob").value;
    let  age=document.getElementById("age").value;
    let country=document.getElementById("country").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let checkbox = document.getElementsByName('Skills');
    let selectedSkills = [];
    
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selectedSkills.push(checkbox[i].value);
        }
    }
    
    console.log(fname," ",lname," ",email," ",mobile," ",dob," ",age," ",country," ",gender," ",selectedSkills);

    let pattern=/^[A-Za-z]+$/;
    let num=/\d/;

    if (num.test(fname) && fname=="") {
        alert("first name is mandatory");
    } 
    else if(lname=="") {
        alert("last name is mandatory");
    }
    else if(num.test(lname)){
         alert("l name not contain numbers")
    }
    else{
        alert("submitted");
    }
}