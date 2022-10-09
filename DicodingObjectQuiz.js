const restaurant = {
	name:"WiiAhmad",
  	city:"Cirebon",
  	"favorite drink":"Ice Bubble Gum",
  	"favorite food":"Bakso",
  	"isVegan":false
}

const {name} = restaurant;

const {'favorite drink': favoriteDrink } = restaurant;

console.log(name);
console.log(favoriteDrink);
