//Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.
//Можно реализовать какую-нибудь простую игру: "угадай число", крестики-нолики,
//можно использовать гайды, главное - немного попрактиковаться в JS (Доп.)

function askName() {
    return prompt("Как Вас зовут?", "Имя");
}

function showMessage(name) {
    let message = "Привет, " + name;
    alert(message);
}

let userName = askName();
showMessage(userName);

function askNumber() {
    return prompt(userName + ", угадай задуманное число от 0 до 9");
}

let askedNumber = askNumber();
let number = 5;

if (askedNumber == number) {
    alert("Вы угадали!");
}
else {
    alert("Вы не угадали =(");
}