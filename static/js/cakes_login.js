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

const regNamePattern = /^([a-z,\s,\-]{2,50})$/i;   
const regEmailPattern = /^([a-z,A-Z,\d,\.,\-,\_]+)@([a-z,A-Z,\d,\-,\_]+)\.([a-z,A-Z]{2,8})(\.[a-z,A-Z]{2,8})?$/;  // \d=0-9 , \.=dot, \-=-, \_=_, +=no limit on chars                                
const regPwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\d\@\-\!\?\*\&\%\$\#]{10,20}$/;        // cant use whitespace as a password  // \w matches a-z A-Z 0-9 and _ , at least a lowercase,Uppercase and digit is needed
const regPwAgainPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[\w\d\@\-\!\?\*\&\%\$\#]{10,20}$/;    //.any single character, (?=)positive lookahead, *0 or more chars
const regHPPattern = /^(?=8|9)[0-9]{8}$/;                       //set to 8 digits (Start from 8 or 9)
const regHomeAddPattern = /^([a-z,A-Z,\d,\,\s]+)$/;             //Blk123, Woodlands Dr 70 
const regCityPattern = /^[a-z,A-Z]{2,56}$/;                     //set to 4-56 alphabets eg: singaPore
const regUnitPattern = /^(\#?[a-z,\-,\d]{2,6})$/i;              //1A, #08-188 can opt not to use # as well
const regPostalPattern = /^[\d]{6}$/;                           //postal code: 123456

let keyData;
console.log(keyData);

form1.addEventListener('submit', function(e){

    e.preventDefault();                                 //prevent signup "submit" from refreshing page      
    
    let regexTestName = regNamePattern.test(name1.value); //returns boolean
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

    let regexTestPwAgain = regPwAgainPattern.test(passwordAgain.value);
    console.log(regexTestPwAgain);
    if (regexTestPwAgain === false){     //boolean compares to boolean
        e.preventDefault();
        alert('Please enter the password again');
        return false;
    }

    let regexTestHp = regHPPattern.test(handphone.value);
    console.log(regexTestHp);
    if (regexTestHp === false){        //boolean compares to boolean
        e.preventDefault();
        alert('Please key in a valid handphone no.');
        return false;
    }

    let regexTestAddress = regHomeAddPattern.test(homeAddress.value);
    console.log(regexTestAddress);
    if (regexTestAddress === false){   //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid address (street)');
        return false;
    }

    let regexTestCity = regCityPattern.test(homeCity.value);
    console.log(regexTestCity);
    if (regexTestCity === false){      //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid city name');
        return false;
    }

    let regexTestUnit = regUnitPattern.test(homeUnit.value);
    console.log(regexTestUnit);
    if (regexTestUnit === false){      //boolean compares to boolean
        e.preventDefault();
        alert('Please enter your unit no.');
        return false;
    }

    let regexTestPostal = regPostalPattern.test(homePostalCode.value);
    console.log(regexTestPostal);
    if (regexTestPostal === false){    //boolean compares to boolean
        e.preventDefault();
        alert('Please enter a valid postal code');
        return false;
    }

    if(regexTestName !== false && regexTestEmail !== false && regexTestPw !== false && regexTestPwAgain !== false && regexTestHp !== false && regexTestAddress !== false && regexTestCity !== false && regexTestUnit !== false && regexTestPostal !== false){
        alert('Your details have been registered with us. Thank you.');
        document.location.href="contact_us.html";
    }

    // setting local storage (Objects values)
    const userForm = {
        regName: name1.value,
        regEmail: email.value,
        regPw: password.value,
        regPwAgain: passwordAgain.value,
        regHP: handphone.value,
        regHomeAdd: homeAddress.value,
        regCity: homeCity.value,
        regUnit: homeUnit.value,
        regPostal: homePostalCode.value
    };

    // let keyData;

    if (localStorage.getItem('keyData') === null){
        keyData = [];                                   
    }else{
        keyData = JSON.parse(localStorage.getItem('keyData')); //extract data out from local storage hence use parse (str to readable format in js)
    }

    keyData.push(userForm);
    localStorage.setItem('keyData', JSON.stringify(keyData));  //local storage only accepts string hence need to stringify
   
});

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
    if(ev.target.value === password.value && regPwAgainPattern.test(ev.target.value)){
        ev.target.classList = "green";
        document.getElementById('error_msg3').style.opacity = '0';
    }else{
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


// ----------------------------------Login (start)----------------------------------- //

let loginForm = document.querySelector('.login_form');
console.log(loginForm);
let logEmail = document.querySelector('.modalOne > .login_form > div > #logEmail');
console.log(logEmail);
let logPassword = document.querySelector('.modalOne > .login_form > div > #logPw');
console.log(logPassword);

loginForm.addEventListener('submit', function(e){

   e.preventDefault();

// check if stored data (local storage) from register-form is the same as data entered by user

    // stored data from in local storage
    var storedData = JSON.parse(localStorage.getItem("keyData"));
    console.log(storedData);

    // user entered data in login-form
    let logEmailVal = logEmail.value;
    console.log(logEmailVal);
    let logPasswordVal = logPassword.value;
    console.log(logPasswordVal);

    for(var i = 0; i < storedData.length; i++){
        // test(compare)
        if(storedData[i].regEmail == " " || storedData[i].regPw == " "){
            alert('Please enter your email and password.');
        }else if(storedData[i].regEmail !== logEmailVal || storedData[i].regPw !== logPasswordVal){
            alert('Your email address and password do not match. Please try again.');

        }else if(storedData[i].regEmail === logEmailVal && storedData[i].regPw === logPasswordVal){
            alert('Welcome to Appeaseofcake. You have successfully logged in.');
            document.location.href="contact_us.html";
        }
    }
}) 

// -------------------------------------Login (end)----------------------------------- //

// ------------------------------ Google maps api (start)----------------------------- //

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
