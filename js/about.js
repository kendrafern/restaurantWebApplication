// Kendra Brauer
// ICT-4510-1 Adv. Website Design & Mgmt
// Portfolio Assignment: Restaurant Web Application
// Using Leaflet.js library to map the restuarant's coordinates
// Summer Quarter 2020
// js/about.js

"use strict";

// Initializes the map and set its view to University of Denver's coordinates
let mymap = L.map('mapid').setView([39.678121, -104.961753], 15);

// Adds a title layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoia2JyYXVlciIsImEiOiJja2UwaXJ0N2QzeDA2MnNxcXF1OHB2dDg3In0.Uyr0f59-U_xMZGQUiIEKtA'
}).addTo(mymap);

// Adds a marker using the University of Denver's coordinates
let marker = L.marker([39.678121, -104.961753]).addTo(mymap);

// Adds a circle
let circle = L.circle([39.678121, -104.961753], {
  color: '#98002E',
  fillColor: '#98002E',
  fillOpacity: 0.5,
  radius: 600
}).addTo(mymap);
