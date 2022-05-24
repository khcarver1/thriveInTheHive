let headerElem = document.querySelector('#navpanel');
let headerNav = document.createElement("nav");
let headerUl = document.createElement('ul');
let headerLi0 = document.createElement('li');
let headerLi1 = document.createElement('li');
let headerLi2 = document.createElement('li');
let headerLi0A = document.createElement('a');
let headerLi1A = document.createElement('a');
let headerLi2A = document.createElement('a');
headerLi0.appendChild(headerLi0A);
headerLi1.appendChild(headerLi1A);
headerLi2.appendChild(headerLi2A);
headerUl.appendChild(headerLi0);
headerUl.appendChild(headerLi1);
headerUl.appendChild(headerLi2);
headerNav.appendChild(headerUl);
headerElem.appendChild(headerNav);

headerElem.style.width = "700px";
headerElem.style.display = "flex";
headerElem.style.justifyContent = "end";
headerElem.style.alignItems = "center";
headerLi0.style.margin = "10px";
headerLi1.style.margin = "10px";
headerLi2.style.margin = "10px";



headerNav.style.justifyContent = "space-around";

headerLi0A.style.color = "var(--secondary-color)";
headerLi1A.style.color = "var(--secondary-color)";
headerLi2A.style.color = "var(--secondary-color)";

//Ul
headerUl.style.display = "flex";
headerUl.style.textAlign = "center";

headerUl.style.listStyleType = "none";
headerLi0A.style.textDecoration = "none";
headerLi0.style.textDecoration = "none";


//Li
headerLi0A.textContent = "Current Listings";
headerLi1A.textContent = "Something";
headerLi2A.textContent = "Something Else";

//setattr
headerLi0A.setAttribute("href","www.ebay.com");