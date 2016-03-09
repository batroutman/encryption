/*
Encrytpor v1.0
Created by Blake Troutman

Encryptor v1.0 takes a message that is input into its code and augments it into an array that
can then be decoded with the cooresponding decoder program as long as they are using the same key.
*/

function myFunction(){

	//define variables
	var message = "Hello World!";
	var keyString = "1354651985916";
	var keyArray = [""];
	var messageArray = [""];
	var alteredArray = [""];

	//load message into array
	for (i = 0; i < message.length; i++)
	{
		messageArray[i] = message.charAt(i);
	}

	//load key into array of equal or greater length of the messageArray
	var multiplier = 0;
	var j = 0;
	var k = j;

	while (j < message.length)
	{
		if (k >= keyString.length)
		{
			multiplier++;
			k = j - (multiplier * keyString.length);
		}
		keyArray[j] = keyString.charAt(k);
		
		j++
		k++
	}


	//add the values of keyArray and messageArray and store them into final encryptedArray
	for (l = 0; l < messageArray.length; l++)
	{
		var a = messageArray[l].charCodeAt(0);
		var b = keyArray[l].charCodeAt(0);
		var c = a + b;
		
		alteredArray[l] = c;
		
	}



	//messageArray = message.split("");
	document.getElementById("output").innerHTML = alteredArray;

}