 let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
   
    let mobile=document.getElementById("mobile").value;
    let dob=document.getElementById("dob").value;
    let  age=document.getElementById("age").value;
   //let country=document.getElementById("country").value;
   let dobvalidate= /\d{1,2}\/\d{1,2}\/\d{4}/;
function validation1() {
    
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    
    let mobile=document.getElementById("mobile").value;
    let dob=document.getElementById("dob").value;
    let  age=document.getElementById("age").value;
    let city=document.getElementById("city").value;
    // let gender = document.querySelector('input[name="gender"]:checked').value;

    let checkbox = document.getElementsByName('Skills');
    let selectedSkills = [];
    
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selectedSkills.push(checkbox[i].value);
        }
    }
    
    
    let pattern=/^[A-Za-z]+$/;
    let num=/\d/;
   
    let count=/\d{10}$/;
    let dobvalidate= /\d{1,2}\/\d{1,2}\/\d{4}/;
    let ageCount=/\d{1,2}$/;

    if (fname=="" || num.test(fname)) {
        alert("first name is mandatory");
    } 
    else if(lname=="") {
        alert("last name is mandatory");
    }
    else if(num.test(lname)){
         alert("last name not contain numbers")
    }
       
    else if(mobile==""){
        alert("Please enter mobile number");
    }
    else if(!count.test(mobile)){
        alert("Enter 10 digit mobile no");
    }
      // else if(!dobvalidate.test(dob)){
        //alert("Dob in dd/mm/yyyy");
    //}
    	
    else  if(age==""){
        alert("Age is  mandatory");
    }
    else if(!ageCount.test(age)){
        alert("Enter 2 digit age");
    }
    else{
        alert("Form submitted");
    }
}

function inputValid(){
let displayMsg=document.getElementById("validMsg");
let num=/\d/;

}

function dateValidate(){
	let dob=document.getElementById("dob").value;
	let dateObj = new Date();

    if(!dobvalidate.test(dob)){
    	  
        alert("Dob in dd/mm/yyyy");
    
    	}
	else if(dateobj.getFullYear()== Date.getFullYear()){
	  alert("date must be less then current year");
	}
	else{
	   alert("date accepted");
	}

}
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
