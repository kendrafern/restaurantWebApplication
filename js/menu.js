// Kendra Brauer
// ICT-4510-1 Adv. Website Design & Mgmt
// Portfolio Assignment: Restaurant Web Application
// Summer Quarter 2020
// menu.js

"use strict";

const menuList = document.getElementById('menu-list');

// Ajax GET request
function getMenuItems() {
    var user = JSON.parse(sessionStorage.getItem('user'));
    var url = 'https://ict4510.herokuapp.com/api/menus?api_key=' + user.api_key;
    fetch(url , {
        method: 'GET',
        headers : new Headers({ 'content-type': 'application/json', 'x-access-token': user.token })
    })
    .then(response => response.json())
    .then(function (response) {
        var items = response.menu
        menuList.innerHTML = '';
        items.forEach(function (item, index) {
            let row = menuList.insertRow();
            let cell = row.insertCell();
            let text = document.createTextNode(item.item);
            cell.appendChild(text);
            cell = row.insertCell();
            text = document.createTextNode(item.description);
            cell.appendChild(text);
            cell = row.insertCell();
            text = document.createTextNode(item.price);
            cell.appendChild(text);
        });
    });
}
getMenuItems();
