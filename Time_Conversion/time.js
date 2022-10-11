function timeConversion(s) {
    // Write your code here
    // TODO: answer here
  
    var number = "1234567890";
    var time = "";
    var meridian = "";
    var arr = [];
  
    for(let i = 0; i < s.length; i++){
      if(i !== ":"){
        if(number.includes(s[i])){
            time += s[i];
            if(time.length == 2){
              arr.push(time);
              time = "";
            }
        }else if(s[i] !== ":" ){
          meridian += s[i];
        }
      }
    }
  
    var result = arr.map(Number);
    var hour = 0;
    var minute = 0;
    var second = 0;
  
    if(meridian == "PM"){
      for(let j = 0; j < result.length; j++){
          if(result[0] < 12){
              hour = String(result[0] + 12);
          }else{
            hour = result[0];
          }
  
          if(result[1] < 10){
            minute = "0" + result[1];
          }else{
            minute = result[1].toString();
          }
  
          if(result[2] < 10){
            second = "0" + result[2];
          }
          else{
            second = result[2].toString();
          }
      }
      return "" + hour + ":" + minute + ":" + second;
    }
  
    else{
      for(let j = 0; j < result.length; j++){
          if(result[0] == 12){
              hour = result[0] - 12;
              hour += "0";
          }else if(result[0] < 10){
            hour = "0" + result[0];
          }
          else{
            hour = result[0].toString();
          }
  
          if(result[1] < 10){
            minute = "0" + result[1];
          }else{
            minute = result[1].toString();
          }
  
          if(result[2] < 10){
            second = "0" + result[2];
          }
          else{
            second = result[2].toString();
          }
      }
      return "" + hour + ":" + minute + ":" + second;
    }
  }
  
  function main() {
    //var s = readLine();
    var s = '12:01:00AM'; // override input
    var result = timeConversion(s);
    console.log(result);
  
  }
  
  main(); // execute program
  
  module.exports = timeConversion