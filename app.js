const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Selectors
const generatPWBtn = document.querySelector('#generate-pw-btn');
const displayPW1 = document.querySelector('#display-pw1');
const displayPW2 = document.querySelector('#display-pw2');
const pwLength = document.querySelector('#pw-length');
let passwordOne = '';
let passwordTwo = '';


// Event listener for Generate password
generatPWBtn.addEventListener('click', function() {
            displayPW1.textContent = generatePassword(passwordOne);

            displayPW2.textContent = generatePassword(passwordTwo);
});

// Generating Random Character
function getRandomChar() {
    let randomLetter = characters[Math.floor(Math.random() * characters.length)];
    return randomLetter;
}

// Generate password one
function generatePassword(password) {
    password = '';

    if (pwLength.value === '') {
        for (let i = 0; i < 4; i++){
            password += getRandomChar();
        }
    } else {
        for (let i = 0; i < pwLength.value; i++){
            password += getRandomChar();
        }
    }
    return password;
}




