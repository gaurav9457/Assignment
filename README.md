<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
  <style type="text/css">
	.btn{
	padding:14px 20px;
	background-color:green;
	border:none;
	margin:10px;
	color:white;
	cursor:pointer;
	border-radius:5px;
	margin-left:15px;
	}
	#displayForm{
	height:300px;
	width:500px;
	background-color:wheat;
	margin:auto;
	}
	td {
  padding: 15px 15px 20px 40px;
  margin-left:50px;
}
	input{
	padding:8px;
	}
	#btnDiv{
	margin-left:150px;
	}
	.formLable{
	font-size:20px;
	}
	#displayContent{
	/* height:200px;
	width:200px; */
	border:1px solid;
	padding:15px;
	display:none;
	}
	#displayChild{
	height:200px;
	width:200px;
	border:1px solid;
	padding:15px;
	display:none;
	display:inline-block;
	}

  </style>
 </head>
 <body>
  <h1 style="color:tomato;text-align:center;">REGISTRATION FORM</h1>
    <div id="parent">

        <div id="displayForm">
            <form action="" onsubmit=" " id="formObj">
                <table>
				     <tr >
                        <td><label for="" class="formLable">Employee-Id : </label></td>
                        <td><input type="number" name="" id="Id"></td>
                    </tr>
                    <tr>
                        <td><label for="" class="formLable">Name : </label></td>

                        <td><input type="text" name="" id="Name"></td>
                    </tr>
                    <tr>
                        <td><label for="" class="formLable">Age : </label></td>
                        <td><input type="number" name="" id="age"></td>
                    </tr>              
                </table>
            </form>
			<div id="btnDiv" class="">
				<button onclick="add()" class='btn'>ADD</button>
			<button onclick="display1()" class='btn' style="background-color:#1E90FF;">DISPLAY</button>
			</div>
			
        </div>

		<div id="displayContent" class="">
			<div id="displayChild" class="">
				
			</div>
		</div>

		<script type="text/javascript">
		let arr=[];

		   function add(){
		     let id=document.getElementById("Id").value;
			 let name=document.getElementById("Name").value;
			 let age=document.getElementById("age").value;

			// console.log("form=",id , name , age);
			 
			 let storedObj={
			 id:id,
			 name:name,
			 age:age
			 }
              let check= arr.length<0 ? [] : arr.push(storedObj);
			 console.log(arr);

			 document.getElementById("Id").value="";
			 document.getElementById("Name").value="";
			 document.getElementById("age").value="";

		   }


		    function display1(){
			    let displayContent = document.getElementById("displayContent");
				let displayChild = document.getElementById("displayChild");
			    displayContent.innerHTML = "";
				displayContent.style.display='block';

			    if(arr.length > 0){
					arr.map(function(obj, index){
						//displayChild.innerHTML = "";
				        // displayChild.style.display='block';
						displayContent.innerHTML += "<h2>Person " + (index + 1) + "</h2>";
						
						displayContent.innerHTML += "* ID: " + obj.id +"<br>"+ "* Name: " + obj.name +"<br>"+ "* Age: " + obj.age + "<br>";
					});

				} else {
				    
				    displayContent.innerHTML = "No values to display";
				}  
		   }  
		</script>
 </body>

</html>
