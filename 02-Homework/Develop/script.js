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



  function generatePassword() {
    var length = prompt("How long would you like your password to be?"),
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
        retVal = "";
        // if ()

              for (var i = 0, n = charset.length; i < length; ++i) {
                  retVal += charset.charAt(Math.floor(Math.random() * n));
              }
              return retVal;
              }  
    

document.getElementById("generate").onclick = function() {password.generatePassword()};
