// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.


// Heres the actual function to generate the password
function generatePassword() {
  var length = prompt("How long would you like your password to be?")
  // put whole thing in this that it has the number parameter
  if (length > 7 && length < 129) {
    // All my prompts and all of the possibilities that the user could choose
    passLower = confirm("Would you like lower case letters?")
    passUpper = confirm("Would you like upper case letters?")
    passNumber = confirm("Would you like numbers in your password?")
    passSpecial = confirm("Would you like special characters in your password?")
    components = ["abcdefghivjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()",
      "abcdefghivjklmnopqrstuvwxyz1234567890!@#$%^&*()",
      "1234567890!@#$%^&*()",
      "abcdefghivjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
      "abcdefghivjklmnopqrstuvwxyz!@#$%^&*()",
      "abcdefghivjklmnopqrstuvwxyz1234567890",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      "abcdefghivjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      "abcdefghivjklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
      "abcdefghivjklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "1234567890",
      "!@#$%^&*()"




    ]
    retVal = "";

    // repeating it for every single combinantion
    if (passLower === true && passUpper === true && passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[0].length; i < length; ++i) {
        retVal += components[0].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (!passLower === true && passUpper === true && passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[1].length; i < length; ++i) {
        retVal += components[1].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (passLower === true && !passUpper === true && passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[2].length; i < length; ++i) {
        retVal += components[2].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (!passLower === true && !passUpper === true && passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[3].length; i < length; ++i) {
        retVal += components[3].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (passLower === true && passUpper === true && !passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[4].length; i < length; ++i) {
        retVal += components[4].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    } 
    else if (!passLower === true && passUpper === true && !passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[5].length; i < length; ++i) {
        retVal += components[5].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    } 
    else if (passLower === true && !passUpper === true && !passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[6].length; i < length; ++i) {
        retVal += components[6].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    } 
    else if (passLower === true && !passUpper === true && passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[7].length; i < length; ++i) {
        retVal += components[7].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    } 
    else if (!passLower === true && passUpper === true && passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[8].length; i < length; ++i) {
        retVal += components[8].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    } 
    else if (passLower === true && passUpper === true && passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[9].length; i < length; ++i) {
        retVal += components[9].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (passLower === true && passUpper === true && !passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[10].length; i < length; ++i) {
        retVal += components[10].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (passLower === true && !passUpper === true && !passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[11].length; i < length; ++i) {
        retVal += components[11].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (!passLower === true && passUpper === true && !passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[12].length; i < length; ++i) {
        retVal += components[12].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (!passLower === true && !passUpper === true && passNumber === true && !passSpecial === true) {
      for (var i = 0, n = components[13].length; i < length; ++i) {
        retVal += components[13].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    else if (!passLower === true && !passUpper === true && !passNumber === true && passSpecial === true) {
      for (var i = 0, n = components[14].length; i < length; ++i) {
        retVal += components[14].charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  }
  else {
    alert("Please enter a number between 8 and 128")

  } /*If statement*/
}/*function */
// actually call the function and have it put the password on the screen
document.getElementById("generate").onclick = function () { password.generatePassword() };










