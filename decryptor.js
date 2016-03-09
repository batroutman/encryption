/*
Decryptor v1.0
Created by Blake Troutman

Decryptor v1.0 takes and encrypted array (that was encrypted using the cooresponding Encryptor v1.0)
and displays the string of the original message as long as the key on the decryptor matches that of the 
encryptor at the time of encryption.
*/
function printMess(){
	
	var mess = [157,162,161];
	document.getElementById("output").innerHTML = reveal(mess);
	
}

function reveal(alteredArray){
	
	//declare variables
	//keyString MUST match the keyString of the Encryptor at time of encryption
	var keyString = "1354651985916";
	//these remain the same
	var keyArray = [""];
	var message = "";
	var messageArray = [""];
	//input the encrypted array here.
	//UPDATE: alteredArray has been moved to parameter
	//var alteredArray = [213,219,213,222,129,220,223,139,213,219,209,139,212,216,207,221,198,231,140,216,212,218];
	
	
	//load key into array of equal or greater length of the alteredArray
	var multiplier = 0;
	var j = 0;
	var k = j;

	while (j < alteredArray.length){
		
		if (k >= keyString.length){
			multiplier++;
			k = j - (multiplier * keyString.length);
		}
		keyArray[j] = keyString.charAt(k);
	
		j++
		k++
	}
	
	

	//decrypt the encrypted array and store values in message array
	//subtract key array values FROM encrypted array values
	for (i = 0; i < alteredArray.length; i++){
		
		var a = alteredArray[i];
		var b = keyArray[i].charCodeAt(0);
		var c = a - b;
		messageArray[i] = String.fromCharCode(c);
		
	}
	
	
	
	//convert messageArray into readable string (message)
	for (p = 0; p < messageArray.length; p++){
		
		message = message + messageArray[p].charAt(0);
		
	}
	
	
	return message;
	
}