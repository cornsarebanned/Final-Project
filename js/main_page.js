
//Register Tab

// function signup(){
//     var regEmail = document.getElementById('regEmail');
//     var regPw = document.getElementById('regPw');
//     var regPwAgain = document.getElementById('regPwAgain');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;


// if (regEmail.value.length == 0){                        //check
//     alert("Please fill in your email address");
//     return;
// }
// else if (regPw.value.length == 0){                      //check
//     alert("Please fill in your password");
//     return;
// }
// else if (regPwAgain.value.length == 0){                 //check
//     alert("Please retype your password");
//     return;
// }
// // else if (regEmail.value.length == 0 || regPw.value.length == 0 || regPwAgain.value.length == 0){
// //     alert("Please fill in your email address and passwords");
// // }
// else if (regPw.value != regPwAgain.value){               //check
//     alert("Please kindly retype the passwords. Passwords do not match.");
//     return;
// }
// else if (regPw.value.length < 10 || regPwAgain.value.length < 10){            //check
//     alert("Please input 10 characters/digits. You are currently short of " + ( 10 - regPw.value.length ) +" characters/digits for 'Your Password' field." );
//     return;
// }
// else if (!regPw.value.match(numbers) && !regPwAgain.value.match(numbers)){              //Check
//     alert("You have not met the password requirements: Number");
//     return;
// }
// else if (!regPw.value.match(lowerCaseLetters) || !regPwAgain.value.match(lowerCaseLetters)){    //Check
//     alert("You have not met the password requirements: [a-z]");       
//     return;                          
// }
// else if (!regPw.value.match(upperCaseLetters) || !regPwAgain.value.match(upperCaseLetters)){    //Check
//     alert("You have not met the password requirements: [A-Z]");
//     return;
// }
// else {
//     localStorage.setItem("regEmail", regEmail.value);
//     localStorage.setItem("regPw", regPw.value);
//     localStorage.setItem("regPwAgain", regPwAgain.value);
//     alert("You have successfully created your account.");
// }

// }


//checking
// function check(){

//     //stored data from the register-form (localStorage)
//     var storedregEmail = localStorage.getItem('regEmail');
//     var storedregPw = localStorage.getItem('regPw');
   
//     //user entered data from the login-form
//     var userregEmail = document.getElementById('logEmail');
//     var userregPw = document.getElementById('logPw');

    
//     //check if stored data from register-form is equivalent to the data entered in the login-form
//     if(userregEmail.value == storedregEmail && userregPw.value == storedregPw){
//         alert("You have successfully logged in!" + userregEmail);
//     }else{
//         alert("Access denied. Valid username and password is required.");
//     }
// }


//Take input data and store as a new object in key/value pairs

// function addNewUser(regEmail,regPw,regPwAgain) {
//     var addNewUserList = JSON.parse(localStorage.getItem("addNewUserList") || "[]");
      
//     var newUser = {
//       email: regEmail,
//       password: regPw,
//       passwordAgain: regPwAgain
//     };
    
//     addNewUserList.push(newUser);
//     // addNewUserList.push(JSON.parse(localStorage.getItem('addNewUserList')));
//     console.log(addNewUserList);

//     localStorage.setItem("addNewUserList", JSON.stringify(addNewUserList));
// };
    
  // For development purpose only, 
  // For cakes_cart trash purpose, set flag to true initially, to load all cakes to localstorage.
  // When customer delete a cake from cakes_cart page, set flag to false
  // to prevent full reload of all cakes in cakes_cart page.
  sessionStorage.setItem("canReloadAllCakesAgain","true");