
//Add a click event listener to listen to click on the document
document.addEventListener("click",function(event){
  
    //check to see if clicked event matches the password-toggler data-snack. If not stop /else return
    if(!event.target.matches("[password-toggler]")) return
    
    //get all the attributes of the password-toggler data-snack and change them from node-list to string using "Array.prototype.slice.call"
    let passwordToggler = Array.prototype.slice.call(document.querySelectorAll(event.target.getAttribute("password-toggler")));
    
    //loop through all the attributes of the data-snack with a .forEach statement and change the attributes of the password field once the password toggle is checked
    
   passwordToggler.forEach(function(x){
    if (event.target.checked){
      x.type="text";
    }
     else{
       x.type="password"
     }
   })
},                          
                            
                            false)
  
  //match to see if selected element matches the data-snack that toggles password fields and return it if it does
  
  //get all instances of the password field and save it in a variable
  
  //use for each on the variable to toggle them 
  