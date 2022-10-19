function janken(pon){
  return pon[Math.floor(Math.random()*items.length)];
}

let pon = ["batu","gunting","kertas"];
console.log(janken(pon));
