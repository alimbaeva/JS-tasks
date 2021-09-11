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

//-------------bank_programes ---------

var summ = +prompt('Введите сумму вклада: ');
var percent = +prompt('Введите процент для начисления: ');

percent = percent / 100;

var result = 'Изменение размера вклада по годам: \n';

for (var i = 1; i <= 5; i++) {
    summ = summ + (summ * percent);
    result += i + "год: " + summ.toFixed(2) + "рублей.\n";
}

alert(result);

//-------легкий вариант------

var summ = +prompt('Введите сумму вклада: ');
var percent = +prompt('Введите процент для начисления: ');

percent = percent / 100

// легкий вариант

var year1 = summ + (summ * percent);
var year2 = year1 + (year1 * percent);
var year3 = year2 + (year2 * percent);
var year4 = year3 + (year3 * percent);
var year5 = year4 + (year4 * percent);

alert(
    'Изменение размера вклада по годам:n' +
    '1 год : ' + year1.toFixed(2) + "рублейn\n" +
    '2 год : ' + year2.toFixed(2) + "рублейn\n" +
    '3 год : ' + year3.toFixed(2) + "рублейn\n" +
    '4 год : ' + year4.toFixed(2) + "рублейn\n" +
    '5 год : ' + year5.toFixed(2) + "рублейn\n"
);
