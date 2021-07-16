const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
