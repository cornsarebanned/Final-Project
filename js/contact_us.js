//Register Tab

// ------------------------------- Register Tab(start)------------------------------- //

const input = document.querySelectorAll('.signup_form > div > input');       //NodeList
console.log(input);

const form = document.querySelector('.signup_form');                               

//foreach
const name = document.querySelector('#regName');
const email = document.querySelector('#regEmail');
const password = document.querySelector('#regPw');
const passwordAgain = document.querySelector('#regPwAgain');
const handphone = document.querySelector('#regHP');
const homeAddress = document.querySelector('#regHomeAdd');
const homeCity = document.querySelector('#regCity');
const homeUnit = document.querySelector('#regUnit');
const homePostalCode = document.querySelector('#regPostal');

const patterns = {
    regName: /^([a-z,A-Z]+)$/,
    regEmail: /^([a-z,A-Z,\d,\.,\-,\_]+)@([a-z,A-Z,\d,\-,\_]+)\.([a-z,A-Z]{2,8})(\.[a-z,A-Z]{2,8})?$/,  // \d=0-9 , \.=dot, \-=-, \_=_, +=no limit on chars                                
    regPw: /^[\w\@\-\!\?\*\&\%\$\#]{10,20}$/i,          // cant use whitespace as a password  // \w matches a-z A-Z 0-9 and _ 
    regPwAgain: /^[\w\@\-\!\?\*\&\%\$\#]{10,20}$/i,
    regHP: /^[0-9]{8}$/,                                //set to 8 digits
    regHomeAdd: /^([a-z,A-Z,\d,\,]+)$/,                 //Blk123, Woodlands Dr 70 
    regCity: /^[a-z,A-Z]{4,56}$/,                       //set to 4-56 alphabets eg: singaPore
    regUnit: /^(\#?[\-,\d]+)$/,                         //#08-188 can opt not to use # as well
    regPostal: /^[\d]{5,6}$/                            //postal code: 123456
};

form.addEventListener('submit', function(e){
    e.preventDefault();                                 //prevent signup "submit" from refreshing page


//validation function

function validate(field, patterns){             //returns true or false, returns true when field is valid and false when the input differs from the regex in the objects
    console.log(patterns.test(field.value));    //comparison of whether patterns is the same as the value in the textbox
    if(patterns.test(field.value)){             //if its a match it will give a class of "valid"
        field.classList = 'Valid';
        console.log("ok");
    }else{
        field.classList = 'Invalid';
        console.log("not ok");
    }
}

input.forEach((ip) => {
    ip.addEventListener('keyup',function(e){
        // console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.id.value]);
    })
});


})

// ------------------------------- Register Tab(end)--------------------------------- //


// function signup(){
//     var regEmail = document.getElementById('regEmail');
//     var regPw = document.getElementById('regPw');
//     var regPwAgain = document.getElementById('regPwAgain');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;


// if (regEmail.value.length == 0){                       
//     alert("Please fill in your email address");
//     return;
// }
// else if (regPw.value.length == 0){                      
//     alert("Please fill in your password");
//     return;
// }
// else if (regPwAgain.value.length == 0){                 
//     alert("Please retype your password");
//     return;
// }
// else if (regEmail.value.length == 0 || regPw.value.length == 0 || regPwAgain.value.length == 0){
//     alert("Please fill in your email address and passwords");
// }
// else if (regPw.value != regPwAgain.value){              
//     alert("Please kindly retype the passwords. Passwords do not match.");
//     return;
// }
// else if (regPw.value.length < 10 || regPwAgain.value.length < 10){            
//     alert("Please input 10 characters/digits. You are currently short of " + ( 10 - regPw.value.length ) +" characters/digits for 'Your Password' field." );
//     return;
// }
// else if (!regPw.value.match(numbers) && !regPwAgain.value.match(numbers)){              
//     alert("You have not met the password requirements: Number");
//     return;
// }
// else if (!regPw.value.match(lowerCaseLetters) || !regPwAgain.value.match(lowerCaseLetters)){    
//     alert("You have not met the password requirements: [a-z]");       
//     return;                          
// }
// else if (!regPw.value.match(upperCaseLetters) || !regPwAgain.value.match(upperCaseLetters)){    
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






// ------------------------------- Google maps api (start)------------------------------- //

function initMap() {
    // The location of Tampines
    const tampines = { lat: 1.3496, lng: 103.9568 };
    // The map, centered at tampines
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: tampines,
    });

    // The marker, positioned at glocal village(appeaseofcake)
    const glocalVillage = { lat: 1.3479, lng: 103.9286 };
    const marker = new google.maps.Marker({
      position: glocalVillage,
      map: map,
    });
}

// ------------------------------- Google maps api (end)--------------------------------- //
