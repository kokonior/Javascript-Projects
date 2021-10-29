window.onload = () => {
   // Creating helper function to set multiple attributes
   function setAttribute(elmName,attribute){
      for(let key in attribute){
         elmName.setAttribute('elmName','attribute[key]');
      }
   }
  
  
