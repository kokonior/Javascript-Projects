function fizzbuzz(){
  for(let i =1;i <= 20;i++){
    if(i % 2 === 0){
      console.log('fizz');
    }else if (i % 7 === 0){
      console.log('fizzbuzz');
    }
    else{
      console.log('buzz');
    }
  }
}

fizzbuzz()