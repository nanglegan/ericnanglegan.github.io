function validateform(){
    var name=document.myform.Username.value
    var nam=document.myform.Password.value
if ((name == "" && nam =="") || (name !="" && nam=="")||(name =="" && nam!="")){
    alert("invalid username and password")
    return false;
}

else{
    
    return true;
}
}