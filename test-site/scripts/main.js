let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Screenshot1.png'){
        myImage.setAttribute('src', 'images/Screenshot2.png');
    } else {
        myImage.setAttribute('src', 'images/Screenshot1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Best Zombie Welcomes You ' + myName;
    }  
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Best Zombie Welcomes You ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}