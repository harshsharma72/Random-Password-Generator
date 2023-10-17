const passwordBox = document.querySelector("#Password");
const btn = document.querySelector("#btn");
const copy = document.querySelector("#copy");
const length = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%&*";
let allchars = upperCase + lowerCase + number + symbol;
function generateRandomPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;

}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
copy.addEventListener("click", () => {
    copyPassword();
})
btn.addEventListener("click", ()=> {
    generateRandomPassword();
})
