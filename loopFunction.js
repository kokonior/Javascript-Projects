const loop = start => {
    console.log(start);
    if(start > 0) loop(start-1);
  };

loop(10);

//   Output :
//   10
//   9
//   8
//   7
//   6
//   5
//   4
//   3
//   2
//   1
//   0
