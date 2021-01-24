
// ------------------------------- Register Tab(start)------------------------------- //

const input1 = document.querySelectorAll('.signup_form > div > input');       //NodeList
console.log(input1);

const form1 = document.querySelector('#panel8 > div.modal-body.modalTwo > .signup_form');     
console.log(form1);
// const errorFound = document.querySelector('#error_msg');
// console.log(errorFound);

const togglePw = document.querySelector('#toggleEye'); // pw eye toggle
const togglePwAgain = document.querySelector('#toggleEye1'); // pw againeye toggle

//foreach
const name1 = document.querySelector('#regName');
console.log(name1);
const email = document.querySelector('#regEmail');
console.log(email);
const password = document.querySelector('#regPw');
console.log(password);
const passwordAgain = document.querySelector('#regPwAgain');
console.log(passwordAgain);
const handphone = document.querySelector('#regHP');
console.log(handphone);
const homeAddress = document.querySelector('#regHomeAdd');
console.log(homeAddress);
const homeCity = document.querySelector('#regCity');
console.log(homeCity);
const homeUnit = document.querySelector('#regUnit');
console.log(homeUnit);
const homePostalCode = document.querySelector('#regPostal');
console.log(homePostalCode);

const regNamePattern = /^([a-z,\s,\-]{1,50})$/i;   
const regEmailPattern = /^([a-z,A-Z,\d,\.,\-,\_]+)@([a-z,A-Z,\d,\-,\_]+)\.([a-z,A-Z]{2,8})(\.[a-z,A-Z]{2,8})?$/;  // \d=0-9 , \.=dot, \-=-, \_=_, +=no limit on chars                                
const regPwPattern = /^[\w\@\-\!\?\*\&\%\$\#]{10,20}$/i;        // cant use whitespace as a password  // \w matches a-z A-Z 0-9 and _ 
const regPwAgainPattern = /^[\w\@\-\!\?\*\&\%\$\#]{10,20}$/i;
const regHPPattern = /^[0-9]{8}$/;                              //set to 8 digits
const regHomeAddPattern = /^([a-z,A-Z,\d,\,\s]+)$/;             //Blk123, Woodlands Dr 70 
const regCityPattern = /^[a-z,A-Z]{3,56}$/;                     //set to 4-56 alphabets eg: singaPore
const regUnitPattern = /^(\#?[\-,\d]+)$/;                       //#08-188 can opt not to use # as well
const regPostalPattern = /^[\d]{6}$/;                           //postal code: 123456


form1.addEventListener('submit', function(e){

    e.preventDefault();                                 //prevent signup "submit" from refreshing page      
           
    let regexTestName = regNamePattern.test(name1.value);
    console.log(regexTestName);

    let regexTestEmail = regEmailPattern.test(email.value);
    console.log(regexTestEmail);

    let regexTestPw = regPwPattern.test(password.value);
    console.log(regexTestPw);

    let regexTestPwAgain = regPwAgainPattern.test(passwordAgain.value);
    console.log(regexTestPwAgain);

    let regexTestHp = regHPPattern.test(handphone.value);
    console.log(regexTestHp);

    let regexTestAddress = regHomeAddPattern.test(homeAddress.value);
    console.log(regexTestAddress);

    let regexTestCity = regCityPattern.test(homeCity.value);
    console.log(regexTestCity);

    let regexTestUnit = regUnitPattern.test(homeUnit.value);
    console.log(regexTestUnit);

    let regexTestPostal = regPostalPattern.test(homePostalCode.value);
    console.log(regexTestPostal);

    //setting local storage
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('passwordAgain', passwordAgain.value);
    localStorage.setItem('handphone', handphone.value);
    localStorage.setItem('homeAddress', homeAddress.value);
    localStorage.setItem('homeCity', homeCity.value);
    localStorage.setItem('homeUnit', homeUnit.value);
    localStorage.setItem('homePostalCode', homePostalCode.value);
})

//Add new class list to toggle border color (live updates)
name1.addEventListener('keyup', function(ev){
    // console.log(ev.target);
    if(regNamePattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg').style.opacity = '1';
    }
})

email.addEventListener('keyup', function(ev){
    if(regEmailPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg1').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg1').style.opacity = '1';
    }    
})

password.addEventListener('keyup', function(ev){
    if(regPwPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg2').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg2').style.opacity = '1';
    }    
})

passwordAgain.addEventListener('keyup', function(ev){
    if(ev.target.value === password.value){
        ev.target.classList = "green";
        document.getElementById('error_msg3').style.opacity = '0';
    }else if(ev.target.value !== password.value){
        ev.target.classList = "red";
        document.getElementById('error_msg3').style.opacity = '1';
    }    
})

handphone.addEventListener('keyup', function(ev){
    if(regHPPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg4').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg4').style.opacity = '1';
    }    
})

homeAddress.addEventListener('keyup', function(ev){
    if(regHomeAddPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg5').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg5').style.opacity = '1';
    }    
})

homeCity.addEventListener('keyup', function(ev){
    if(regCityPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg6').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg6').style.opacity = '1';
    }    
})

homeUnit.addEventListener('keyup', function(ev){
    if(regUnitPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg7').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg7').style.opacity = '1';
    }    
})

homePostalCode.addEventListener('keyup', function(ev){
    if(regPostalPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg8').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg8').style.opacity = '1';
    }    
})

//toggle eye passwords
togglePw.addEventListener('click',function(e){
    const type = password.getAttribute('type')==='password' ? 'text': 'password';
    password.setAttribute('type',type);
    this.classList.toggle('fa-eye-slash');
});

//toggle eye passwords again
togglePwAgain.addEventListener('click',function(e){
    const type = passwordAgain.getAttribute('type')==='password' ? 'text': 'password';
    passwordAgain.setAttribute('type',type);
    this.classList.toggle('fa-eye-slash');
});


//local storage
if(window.localStorage){
    console.log('Supported');
    localStorage.setItem("","");
}else{
    console.log('Unsupported');
}



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
