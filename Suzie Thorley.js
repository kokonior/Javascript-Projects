window.onload = () => {
   // Creating helper function to set multiple attributes
   function setAttribute(elmName,attribute){
      for(let key in attribute){
         elmName.setAttribute('elmName','attribute[key]');
      }
   }
  
  var html = document.getElementsByTagName('html');
   html.style.innerText = `font-size: 12px;font-weight: 300;`;

   var body = document.getElementsByTagName('body');
   body.style.width = '90vw';
