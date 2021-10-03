//Submitted
//1.To execute write "node additive" in command prompt(requires node js installed)
//2.If node is not installed create a HTML file and add <script type='text/javascript' src='additive.js'></script> 
const input="Pqffeqtqdsenq";
const key=11;
let encryptedText='';
let decryptedText='';
//Encryption
const encrypt=(value)=>{
	let encrypted=value>96?(value+key-97) % 26 + 97:(value+key-65) % 26 + 65;
	return String.fromCharCode(encrypted);
};
//Decryption
const decrypt=(value)=>{
	let decrypted;
	//checks for Lower case
	if(value>96){
		//checks if value is negative
		if(lowerCase_checker(value)){
			value+=26;
		}
		decrypted=(value-key-97) % 26 + 97;
	}else{
		//Upper case part 
		if(upperCase_checker(value)){
			value+=26;
		}
		decrypted=(value-key-65) % 26 + 65;	
	}
	return String.fromCharCode(decrypted);
}
//negative checker functions
const lowerCase_checker=val=>(val-key)<=97?true:false;
const upperCase_checker=val=>(val-key)<=65?true:false;
//Iterates through input string
for(let i in input){
	encryptedText+=encrypt(input.charCodeAt(i));//passes ASCII value to encrypt
	decryptedText+=decrypt(encryptedText.charCodeAt(i));//passes ASCII value to Decrypt
}
console.log(`Input text: ${input}, Key: ${key}`);
console.log(`Encrypted text: ${encryptedText}`);
console.log(`Decrypted text: ${decryptedText}`);
