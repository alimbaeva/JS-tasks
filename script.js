//---- ARAY ---------

function comparAnswers(userAnswer, answer) {
    if (userAnswer == answer) {
        alert('Все верно!');
    } else {
        alert('А вот и нет. Правильный ответ ' + answer);
    }

}

function getRandomNumber(max) {

    return Math.round(Math.random() * max);
}
// гЕНЕРИРУЕМ МАССИВ СЛУЧАЙНЫХ ЧИСЕЛ
function generateRandomArray(length) {
    var numbers = [];

    for (var i = 0; i < length; i++) {
        var randomNumber = getRandomNumber(100);
        numbers.push(randomNumber);
    }
    return numbers;
}
var numbers = generateRandomArray(5);

// for(var i = 0; i <5; i++){
// 	var randomNumber = getRandomNumber(100);
// 	numbers.push(randomNumber);
// }
alert('Запомни числа и их порядок: ' + numbers);

var userAnswer = +prompt('Каким было первое число?');
comparAnswers(userAnswer, numbers[0]);


userAnswer = +prompt('А последнее?');
comparAnswers(userAnswer, numbers[numbers.length - 1]);


var n = getRandomNumber(numbers.length);
userAnswer = +prompt('А как нсчет числа под номером ' + (n + 1) + '?');
comparAnswers(userAnswer, numbers[n]);