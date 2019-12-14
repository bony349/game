
    var list =document.getElementsByClassName("myform");
    var disList = document.getElementsByClassName("dis");
    let password = document.getElementById("password");
    let confimation = document.getElementById("confirm");
    let passDis = document.getElementById("passDis");
    let confirmDis = document.getElementById("confirmDis");
 



    // functions
/*
    function isValid(){
      for(let i = 0; i < disList.length; i++)
        if(disList[i].style.background != "rgb(84, 242, 108)")
          return false;

      if(passDis.style.borderBottom != "2px solid rgb(84, 242, 108)" || confirmDis.style.borderBottom != "2px solid rgb(84, 242, 108)")
            return false;
      
        return true;
    }
    */

    function containAlphabets(text){
      regex = /^[A-Z a-z]+$/;
      for(let i = 0 ; i < text.length; i++){
         if(regex.test(text.charAt(i)))
           return true;
      }
      return false;
    }
    function containNmbers(text){
    regex = /^[0-9@.*!$%]+$/;
      for(let i = 0 ; i < text.length; i++){
         if(regex.test(text.charAt(i)))
           return true;
      }
      return false;
    }
    function removeSpaces(text){
     if(text.value.indexOf(" ") != -1)    {
       text.value = text.value.replace( /\s/g, '');        // to remove spaces from the textfeild
       return true;
     }
     return false;
    }
   
    /*
    function disableForms(index){
        for(let i=index ; i < list.length; i++){
        list[i].value = ""
        disList[i].innerHTML =""; 
        disList[i].style.borderBottom = "none"
        list[i].disabled =true
        console.log(i)
        }
    }
*/




 //disableForms(1);

  for(let i =0 ; i < list.length; i++){
    let textFeild = list[i];
    let message = disList[i];
    //let order = i;
    var regex = /^[A-Z a-z 0-9@.]+$/
   textFeild.onkeydown = function(){
        if(textFeild.value == "" || textFeild.value == null ){
          message.innerHTML = "Empty"; 
          message.style.borderBottom = "#FC8C1B solid 2px"
         // disableForms(order+1);
        }
        else if(!regex.test(textFeild.value)){
          message.innerHTML = "None since";
          message.style.borderBottom = "#E93535 solid 2px";
          //disableForms(order+1);
        }
        else{
          message.innerHTML = "All Good!";
          message.style.borderBottom = "#54F26C solid 2px";
          //list[order+1].disabled = false;
          
        }
        removeSpaces(textFeild);

      
    } 
}



 let emailFeild =  list[1];
 emailFeild.onkeyup = function(){
    let dis = disList[1];
    
      if(emailFeild.value != ""){
        if (emailFeild.value.indexOf('@') == -1){
        dis.innerHTML ="You forgot to put @"; 
        dis.style.borderBottom = "#E93535 solid 2px"
        }
        else if (emailFeild.value.indexOf('.') == -1){
          dis.innerHTML ="You forgot to put ."; 
          dis.style.borderBottom = "#E93535 solid 2px"
        }
        else if(emailFeild.value.indexOf(".com") == -1){
          dis.innerHTML ="You forgot to put .com"; 
          dis.style.borderBottom = "#E93535 solid 2px"
        }
      } 
 }

 password.onkeyup = function(){
      if(containAlphabets(password.value) && containNmbers(password.value)){
      passDis.innerHTML = "Strong"
      passDis.style.borderBottom = "#54F26C solid 2px"
      }else{
        passDis.innerHTML = "Weak"
        passDis.style.borderBottom = "#E93535 solid 2px"
      }
      if(removeSpaces(password)){
          passDis.innerHTML = "A space been removed"
          passDis.style.borderBottom = "#54F26C solid 2px"
        } 
 }

 confimation.onkeyup = function(){
   if(confimation.value == password.value){
    confirmDis.innerHTML = "All Good!"
    confirmDis.style.borderBottom = "#54F26C solid 2px"
   }
   else{
    confirmDis.innerHTML = "Not The Same"
    confirmDis.style.borderBottom = "#E93535 solid 2px"
   }
  
   if(removeSpaces(confimation)){
    confirmDis.innerHTML = "A space been removed"
    confirmDis.style.borderBottom = "#54F26C solid 2px"
  } 
 }
/*
 function onDone(){
   let x =  document.getElementById("valid");
   if(isValid()){
      x.innerHTML = "Done!";
      x.style.background = "#54F26C";
   }
   else{
      x.innerHTML = "Something went wrong";
      x.style.background = "#E93535";
   }
 }
*/
