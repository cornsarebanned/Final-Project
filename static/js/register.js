// ------------------------------- Register Tab(start)-------------------------------//
// const input1 = document.querySelectorAll('.signUP > input');       //NodeList(5)
// console.log(input1);
const form1 = document.querySelector('.signup_form');
console.log(form1);
const togglePw = document.querySelector('#toggleEye'); // pw eye toggle
console.log(togglePw);
const togglePwAgain = document.querySelector('#toggleEye1'); // pw againeye toggle
console.log(togglePwAgain);
//foreach
const username = document.querySelector('#regName');
console.log(username);
const email = document.querySelector('#regEmail');
console.log(email);
const password = document.querySelector('#regPw');
console.log(password);
const retype_password = document.querySelector('#regPwAgain');
console.log(retype_password );
const telephone = document.querySelector('#regHP');
console.log(telephone);
const address = document.querySelector('#regHomeAdd');
console.log(address);
const unit = document.querySelector('#regUnit');
console.log(unit);
const postal = document.querySelector('#regPostal');
console.log(postal);



const regNamePattern = /^([a-z,\s,\-]{2,50})$/i;
const regEmailPattern = /^([a-z,A-Z,\d,\.,\-,\_]+)@([a-z,A-Z,\d,\-,\_]+)\.([a-z,A-Z]{2,8})(\.[a-z,A-Z]{2,8})?$/;  // \d=0-9 , \.=dot, \-=-, \_=_, +=no limit on chars
const regPwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\d\@\-\!\?\*\&\%\$\#]{10,20}$/;        // cant use whitespace as a password  // \w matches a-z A-Z 0-9 and _ , at least a lowercase,Uppercase and digit is needed
const regPwAgainPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\d\@\-\!\?\*\&\%\$\#]{10,20}$/;    //.any single character, (?=)positive lookahead, *0 or more chars
const regHPPattern = /^(?=8|9)[0-9]{8}$/;                       //set to 8 digits (Start from 8 or 9)
const regHomeAddPattern = /^([a-z,A-Z,\d,\,\s]+)$/;             //Blk123, Woodlands Dr 70
const regUnitPattern = /^(\#?[a-z,\-,\d]{2,6})$/i;              //1A, #08-188 can opt not to use # as well
const regPostalPattern = /^[\d]{6}$/;                           //postal code: 123456

// let keyData2;
// console.log(keyData2);
form1.addEventListener('submit', function(e){
    //e.preventDefault();                                 prevent signup "submit" from refreshing page
    let regexTestName = regNamePattern.test(username.value); //returns boolean
    console.log(regexTestName);
    if (regexTestName === false){     //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid name (in full)');
        return false;
    }
    let regexTestEmail = regEmailPattern.test(email.value);
    console.log(regexTestEmail);
    if (regexTestEmail === false){     //boolean compares to boolean
        e.preventDefault();
        alert('Please key in a valid email address');
        return false;
    }
    let regexTestPw = regPwPattern.test(password.value);
    console.log(regexTestPw);
    if (regexTestPw === false){     //boolean compares to boolean
        e.preventDefault();
        alert('Please key in a valid password');
        return false;
    }
    let regexTestPwAgain = regPwAgainPattern.test(password.value);
    console.log(regexTestPwAgain);
    if (regexTestPwAgain === false){     //boolean compares to boolean
        e.preventDefault();
        alert('Please enter the password again');
        return false;
    }
    let regexTestHp = regHPPattern.test(telephone.value);
    console.log(regexTestHp);
    if (regexTestHp === false){        //boolean compares to boolean
        e.preventDefault();
        alert('Please key in a valid handphone no.');
        return false;
    }

    let regexTestAddress = regHomeAddPattern.test(address.value);
    //console.log(regexTestAddress);
    if (regexTestAddress === false){   //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid address (street)');
        return false;
    }

   let regexTestUnit = regUnitPattern.test(unit.value);
    //console.log(regexTestUnit);
    if (regexTestUnit === false){      //boolean compares to boolean
        e.preventDefault();
        alert('Please enter your unit no.');
        return false;
    }

   let regexTestPostal = regPostalPattern.test(postal.value);
    console.log(regexTestPostal);
    if (regexTestPostal === false){    //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid postal code');
        return false;
    }



    if(regexTestName !== false && regexTestEmail !== false && regexTestPw !== false && regexTestPwAgain !== false && regexTestHp !== false && regexTestAddress !== false && regexTestUnit !== false && regexTestPostal !== false){
        // TODO - removed for testing
        alert('Your details have been registered with us. Thank you.');
        // document.location.href="register_signup.html";
    }

    // setting local storage (Objects values)
    const userForm = {
        regName: username.value,
        regEmail: email.value,
        regPw: password.value,
        regPwAgain: retype_password.value,
        regHP: telephone.value,
        regHomeAdd: address.value,
        regUnit: unit.value,
        regPostal: postal.value
    };
    // let keyData2;
    if (localStorage.getItem('keyData2') === null){
        keyData2 = [];
    }else{
        keyData2 = JSON.parse(localStorage.getItem('keyData2')); //extract data out from local storage hence use parse (str to readable format in js)
    }
    keyData2.push(userForm);
    localStorage.setItem('keyData2', JSON.stringify(keyData2));  //local storage only accepts string hence need to stringify
});
// KEYUP LIVE VALIDATION [START]
//Add new class list to toggle border color (live updates)
username.addEventListener('keyup', function(ev){
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
retype_password.addEventListener('keyup', function(ev){
    if(ev.target.value === password.value && regPwAgainPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg3').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg3').style.opacity = '1';
    }
})
telephone.addEventListener('keyup', function(ev){
    if(regHPPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg4').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg4').style.opacity = '1';
    }
})


address.addEventListener('keyup', function(ev){
    if(regHomeAddPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg5').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg5').style.opacity = '1';
    }
})

unit.addEventListener('keyup', function(ev){
    if(regUnitPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg7').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg7').style.opacity = '1';
    }
})

postal.addEventListener('keyup', function(ev){
    if(regPostalPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg8').style.opacity = '0';
    }else{
        ev.target.classList = "red";
        document.getElementById('error_msg8').style.opacity = '1';
    }
})









// KEYUP LIVE VALIDATION [END]
//toggle eye passwords
togglePw.addEventListener('click',function(e){
    const type = password.getAttribute('type')==='password' ? 'text': 'password';
    password.setAttribute('type',type);
    this.classList.toggle('fa-eye-slash');
});
//toggle eye passwords again
togglePwAgain.addEventListener('click',function(e){
    const type = retype_password.getAttribute('type')==='password' ? 'text': 'password';
    retype_password.setAttribute('type',type);
    this.classList.toggle('fa-eye-slash');
});
// -------------------------------- Register Tab(end)-------------------------------- //
// ----------------------------------Login (start)----------------------------------- //
// let loginForm = document.querySelector('.login_form');
// console.log(loginForm);
// let logEmail = document.querySelector('.modalOne > .login_form > div > #logEmail');
// console.log(logEmail);
// let logPassword = document.querySelector('.modalOne > .login_form > div > #logPw');
// console.log(logPassword);
// loginForm.addEventListener('submit', function(e){
//    e.preventDefault();
// check if stored data (local storage) from register-form is the same as data entered by user
// stored data from in local storage
// var storedData = JSON.parse(localStorage.getItem("keyData"));
// console.log(storedData);
// user entered data in login-form
// let logEmailVal = logEmail.value;
// console.log(logEmailVal);
// let logPasswordVal = logPassword.value;
// console.log(logPasswordVal);
// for(var i = 0; i < storedData.length; i++){
// test(compare)
//         if(storedData[i].regEmail == " " || storedData[i].regPw == " "){
//             alert('Please enter your email and password.');
//         }else if(storedData[i].regEmail !== logEmailVal || storedData[i].regPw !== logPasswordVal){
//             alert('Your email address and password do not match. Please try again.');
//         }else if(storedData[i].regEmail === logEmailVal && storedData[i].regPw === logPasswordVal){
//             alert('Welcome to Appeaseofcake. You have successfully logged in.');
//             document.location.href="contact_us.html";
//         }
//     }
// })
// -------------------------------------Login (end)----------------------------------- //