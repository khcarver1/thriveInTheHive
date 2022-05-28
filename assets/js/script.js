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


//style
//ul
headerUl.style.display = "flex";
headerUl.style.textAlign = "center";
headerUl.style.listStyleType = "none";

//Li A tags
headerLi0A.style.color = "var(--secondary-color)";
headerLi1A.style.color = "var(--secondary-color)";
headerLi2A.style.color = "var(--secondary-color)";
headerLi0A.style.textShadow = "2px 2px 2px black";
headerLi1A.style.textShadow = "2px 2px 2px black";
headerLi2A.style.textShadow = "2px 2px 2px black";

headerLi0A.style.textDecoration = "none";
//Li
headerLi0.style.textDecoration = "none";
headerLi0.style.margin = "30px";
headerLi1.style.margin = "30px";
headerLi2.style.margin = "30px";
headerLi0.style.fontSize = "20px";
headerLi1.style.fontSize = "20px";
headerLi2.style.fontSize = "20px";
//headerNav
headerNav.style.justifyContent = "space-around";
//headerElem
headerElem.style.width = "100%";
headerElem.style.display = "flex";
headerElem.style.justifyContent = "space-evenly";
headerElem.style.alignItems = "center";


//setattr
headerLi0A.setAttribute("href", "./currentlistings.html");

//Li nav item names
headerLi0A.textContent = "Current Listings";
headerLi1A.textContent = "Sell with Shelly";
headerLi2A.textContent = "Testimonials";
//beehive logo mouseover functions
headerLi0.addEventListener("mouseenter", moBeeHiveLi0A);
headerLi0.addEventListener("mouseleave", mlBeeHiveLi0A);
function moBeeHiveLi0A() {
    beeHiveLi0A = document.createElement('img');
    beeHiveLi0A.setAttribute("src", "./assets/favicon/beehivefavicon.png");
    beeHiveLi0A.style.width = "40px";
    beeHiveLi0A.style.height = "22.4px";
    headerLi0.style.display = "flex";
    headerLi0.style.alignItems = "center";
    headerLi0.style.marginLeft = "-10px";
    headerLi0A.style.textShadow = "2px 2px 2px grey";
    headerLi0.appendChild(beeHiveLi0A);
    headerLi0.insertBefore(headerLi0A, headerLi0.children[2]);
};
function mlBeeHiveLi0A() {
    headerLi0.removeChild(beeHiveLi0A);
    headerLi0.style.marginLeft = "30px";
    headerLi0A.style.textShadow = "2px 2px 2px black";
};
headerLi1.addEventListener("mouseenter", moBeeHiveLi1A);
headerLi1.addEventListener("mouseleave", mlBeeHiveLi1A);
function moBeeHiveLi1A() {
    beeHiveLi1A = document.createElement('img');
    beeHiveLi1A.setAttribute("src", "./assets/favicon/beehivefavicon.png");
    beeHiveLi1A.style.width = "40px";
    beeHiveLi1A.style.height = "22.4px";
    headerLi1.style.display = "flex";
    headerLi1.style.alignItems = "center";
    headerLi1.style.marginLeft = "10px";
    headerLi0.style.marginRight = "10px";
    headerLi1A.style.textShadow = "2px 2px 2px grey";
    headerLi1.appendChild(beeHiveLi1A);
    headerLi1.insertBefore(headerLi1A, headerLi1.children[2]);
};
function mlBeeHiveLi1A() {
    headerLi1.removeChild(beeHiveLi1A);
    headerLi1.style.marginLeft = "30px";
    headerLi0.style.marginRight = "30px";
    headerLi1A.style.textShadow = "2px 2px 2px black";
};
headerLi2.addEventListener("mouseenter", moBeeHiveLi2A);
headerLi2.addEventListener("mouseleave", mlBeeHiveLi2A);
function moBeeHiveLi2A() {
    beeHiveLi2A = document.createElement('img');
    beeHiveLi2A.setAttribute("src", "./assets/favicon/beehivefavicon.png");
    beeHiveLi2A.style.width = "40px";
    beeHiveLi2A.style.height = "22.4px";
    headerLi2.style.display = "flex";
    headerLi2.style.alignItems = "center";
    headerLi2.style.marginLeft = "10px";
    headerLi1.style.marginRight = "10px";
    headerLi2A.style.textShadow = "2px 2px 2px grey";
    headerLi2.appendChild(beeHiveLi2A);
    headerLi2.insertBefore(headerLi2A, headerLi2.children[2]);
};
function mlBeeHiveLi2A() {
    headerLi2.removeChild(beeHiveLi2A);
    headerLi2.style.marginLeft = "30px";
    headerLi1.style.marginRight = "30px";
    headerLi2A.style.textShadow = "2px 2px 2px black";
};
