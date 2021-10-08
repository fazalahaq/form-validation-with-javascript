function myfun()
{
if(nam() && age() && reg() && mobile() && check()){
    return true;
}
else{
    return false;
}

}

function nam(){
    var name=document.myForm.name.value;  
    if (name==null || name==""){  
        alert("Name can't be blank");  
        return false;  
      }
      else{
          return true;
      }
}


function age(){
    var ag = document.getElementById("age").value;
if(isNaN(ag)||ag<18||ag>100)
{
alert("The age must be a number between 18 and 100");
return false;
}
else{
    return true;
}
}

function reg(){

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    if(!regex.test(email))
    {  
        alert("Email address is incorrect");
        return false;
    }
    else
    {
        return true;
    }
}




function mobile(){
    var mno = document.getElementById("phone").value;
if(mno==""||mno==null)
{
alert("Enter The Phone No");
return false;
}
else if(isNaN(mno)||mno.length>10||mno.length<10)
{
alert("The mobile no. always has 10 digit numerical value");
return false;
}
else
{
    return true;
}
}



function check(){
    
    if(document.getElementById('Travel').checked||document.getElementById('cook').checked||document.getElementById('foot').checked)
    {
        return true;
    }
    else
    {
        alert ("checkbox not checked"); 
        return false;
    }
}

