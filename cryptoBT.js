//cryptoBT.js
//Blake Troutman 2016

function CryptoBT(givenKey="default key"){
	
	var myKey = givenKey;
	var self = this;
	
	//getters and setters
	this.getKey = function(){
		return myKey;
	}//end getKey
	
	this.setKey = function(text){
		if(typeof(text) == "string"){
			myKey = text;
		}else{
			console.log("ERROR: typeof " + text + " must be string.");
		}//end branch
	}//end setKey
	
	/* public methods */
	
	//fix mod
	this.mod = function(n, m){
		return ((n % m) + m) % m;
	}//end mod
	
	//encryption function (return encrypted text)
	this.encryptBT = function(text){ 
		var key = myKey;
		var original = text;
		var outArray = [];
		
		//setup arrays
		var keyArray = toIntArray(loopKey(key, text.length));
		var originalArray = toIntArray(text);
		
		//combine arrays and bind to ASCII limits
		outArray = addArrays(originalArray, keyArray);
		outArray = bind(outArray);
		
		//cast the array of ints to a string
		var result = this.arrayToString(outArray);
		
		return result;
		
	}//end encryptBT
	
	//decryption function (return decrypted text)
	this.decryptBT = function(text){
		var key = myKey;
		var original = text;
		var outArray = [];
		
		//setup arrays
		var keyArray = toIntArray(loopKey(key, text.length));
		var originalArray = toIntArray(text);
		
		//combine arrays and bind to ASCII limits
		outArray = subArrays(originalArray, keyArray);
		outArray = bind(outArray);
		
		//cast the array of ints to a string
		var result = this.arrayToString(outArray);
		
		return result;
		
	}//end decryptBT
	
	//string -> Array[int]
	var toIntArray = function(text){
		var outArray = [];
		
		for(i = 0; i < text.length; i++){
			outArray[i] = text.charCodeAt(i);
		}//end for loop
		
		return outArray;
	}//end toIntArray
	
	//create a string of a given length that loops through the given text
	var loopKey = function(key, length){
		var keyI = 0;
		var result = "";
		
		for(i = 0; i < length; i++){
			if(keyI >= key.length){
				keyI = 0;
			}
			
			result = result + key.charAt(keyI);
			keyI = keyI + 1;
		}
		
		return result;
	}//end loopKey
	
	//output an array of the sum of two equally long int arrays
	var addArrays = function(original, key){
		var result = [];
		
		for(i = 0; i < original.length; i++){
			result[i] = (original[i] + key[i]);
		}//end for loop
		
		return result;
	}//end addArrays
	
	//output an array of the difference of two equally long int arrays
	var subArrays = function(original, key){
		var result = [];
		
		for(i = 0; i < original.length; i++){
			result[i] = (original[i] - key[i]);
		}//end for loop
		
		return result;
	}//end subArrays
	
	//converts array of integers to string of ASCII characters
	this.arrayToString = function(arr){
		var result = "";
		
		for(i = 0; i < arr.length; i++){
			result = result + String.fromCharCode(arr[i]);
		}//end for loop
		
		return result;
	}//end arrayToString
	
	//limit the values of an int array to ASCII limits
	var bind = function(arr){
		var result = [];
		//-+ 32 mod 95
		for(i = 0; i < arr.length; i++){
			//result[i] = mod((arr[i] - 32) , 95) + 32;
			result[i] = self.mod(arr[i], 281474976710656);
		}//end for loop
		
		return result;
	}//end bind
	
}