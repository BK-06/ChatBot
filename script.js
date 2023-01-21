'use strict';

const nameInput = document.querySelector('.name-input');
const btnSignUp = document.getElementById('signup-btn');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.pass-input');
const cPasswordInput = document.querySelector('.cpass-input');
const emptyEl = document.querySelector('.empty');

const nameNotice1 = document.querySelector('.name-notice-1');
const nameNotice2= document.querySelector('.name-notice-2');
const emailNotice = document.querySelector('.email-notice');
const passwordNotice1 = document.querySelector('p-notice-1');
const passwordNotice2 = document.querySelector('p-notice-2');
const CpasswordNotice = document.querySelector('.cp-notice');

btnSignUp.addEventListener('click',signupData);

// Regex regualar expressions
// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// g - global, m- multiline, they will search in given data
// + means everything in  brackts needs to be there, $ end of line



function signupData (){
    return validName(),validEmail(),validPassword(),validCpassword(),storeData();
}


const upperCase = /[A-Z]/g;
const lowerCase = /[a-z]/g;
const numbers = /[0-9]/g;
const special = /[!@#$%^&+-.?_]/g;

// checking name 
// name length should be >= 2 and should be a word.
// name format : Bhanu Kiran

function validName(){
    let str = String(nameInput.value);
    if(nameInput.value.match(numbers)|| nameInput.value.match(special)) {
        nameNotice2.classList.remove();
    } else {
        if(nameInput.value.length>=2){
            throwError();
        }
        else {
            console.log('Invalid Name')
        }
    }
}


// checking email valid or not
// email format bhanu._-kiran123@gmail.com;

const mailFormat = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/gm;

function validEmail(){
    if(emailInput.value.match(mailFormat)){
        throwError();
    } else {
        console.log('Invalid Email')
    }
}

// password
// password not equal to email or name
// Passwords should have at least 1 capital letter, 1 small, 1 number and 1 special characters
function validPassword(){

    if(passwordInput.value.match(lowerCase)&&passwordInput.value.match(upperCase)&&passwordInput.value.match(numbers)&&passwordInput.value.match(special))
    {
        if((passwordInput.value!==nameInput.value)&&(passwordInput.value!==emailInput.value)){
            console.log('Valid Password');
        } else {
            console.log('Invalid Password')
        }
    } else {
        console.log('Invalid Password')
    }


}

// checking confirm password;

function validCpassword(){
    if(passwordInput.value === cPasswordInput.value){
        throwError();
    } else {
        CpasswordNotice.classList.remove('hidden');
    }
}


////////////BREAK////////

// Also make sure that email id is not already registered.

// const arr = [{id: 1,
//               name: 'Abhishek Kumar', 
//               email: 'myemail@gmail.com',
//               password: 'Abhishek123#!' }]


const inputsEl = document.getElementsByClassName('inputs');
// console.log(inputsEl);
let arr = Array.from(inputsEl);
let array = [];
let id = 0;

function storeData() {
    let o = {id: id++};
    for(const item of arr){
        o[item.name] = item.value
        console.log(o);
    }
    array.push(o);
    console.log(array);
}

// Error Throwing
emptyEl.style.cssText = 'color:red';

//document.body.appendChild(anchor);

let anchor = document.createElement('a');
function throwError(){
    // console.log(nameInput.value);
    if((nameInput.value==='')||(emailInput.value==='')||(cPasswordInput.value==='')||(passwordInput.value==='')) {
        emptyEl.classList.remove('hidden');
        anchor.setAttribute('href','#');
    } else {
        emptyEl.classList.add('hidden');
    }
    anchor.setAttribute('href','login.html');
    anchor.appendChild(btnSignUp);
    document.body.appendChild(anchor)
}

// Cannot display all conditions errors. but all condions were satisfying.


