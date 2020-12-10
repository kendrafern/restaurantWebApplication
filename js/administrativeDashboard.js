// Kendra Brauer
// ICT-4510-1 Adv. Website Design & Mgmt
// Portfolio Assignment: Restaurant Web Application
// Summer Quarter 2020
// js/administrativeDashboard.js

"use strict";

const loginForm = document.getElementById('form-login');
const addForm = document.getElementById('foodMenuItemForm');
const hideFoodItem = document.getElementById('addFoodItem');
const signInInstruction = document.getElementById('signIn');

// Login Form and Process
function submitForm () {
    const data = JSON.stringify(Object.fromEntries(new FormData(loginForm)));
    fetch('https://ict4510.herokuapp.com/api/login', {
        method: 'POST',
        body: data,
        headers: new Headers({ 'Content-Type': 'application/json' })
    })
    .then(response => response.json())
    .then(function (response) {
        sessionStorage.setItem('user', JSON.stringify(response.user));
        loginForm.style.display = 'none';
        addForm.style.display = 'block';
        var user = JSON.parse(sessionStorage.getItem('user'));
        document.getElementById('message').innerHTML = 'Welcome ' + user.first_name + '!';
        console.log(user);
        signInInstruction.style.display = 'none';
        hideFoodItem.style.display = 'block';
    });
}

// Food Menu Item Form
// Make AJAX POST request containing item, description and price to "https://ict4510.herokuapp.com/api/menu?api_key=<your-api-key>" endpoint
//The request must contain the session token in the header (x-access-token:<your-token>).
//A successful request will result in a 201 HTTP response.

function postMenuItem() {
    const data = JSON.stringify(Object.fromEntries(new FormData(addForm)));
    var user = JSON.parse(sessionStorage.getItem('user'));
    var url = 'https://ict4510.herokuapp.com/api/menus?api_key=' + user.api_key;
    fetch(url , {
        method: 'POST',
        body: data,
        headers : new Headers({ 'content-type': 'application/json', 'x-access-token': user.token })
    })
    .then(function (response) {
        document.getElementById('add-message').innerHTML = 'Response Status: ' + response.status;
    });
}

// Logout Process
document.getElementById("logoutButton").addEventListener("click", logout);

function logout() {
    // delete user from sessionsStorage
    sessionStorage.removeItem('user');
    // show login form
    hideFoodItem.style.display = 'none';
    loginForm.style.display = 'block';
    signInInstruction.style.display = 'block';
}
