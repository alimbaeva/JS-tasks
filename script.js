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

// 2. Банковская программа
// Пользователь вводит сумму вклада и процент, который будет начисляться ежегодно. 
// Отобразить размер вклада поочередно на ближайшие 5 лет.

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


//----------------------------calculation-----------


// 1.Конвертер валют
// Программа хранит в двух переменных курс доллара и евро. 
// В первой переменной у вас хранится стоимость одного евро в рублях, во второй - 
// стоимость одного доллара в рублях. Вы спрашиваете у пользователя, 
// сколько рублей он хочет сконвертировать, получаете это число и считаете. 
// Результат надо вывести на страницу с помощью alert.



var euro = '96.5';
var dollar = '87.7';
euro = parseInt(euro);
dollar = parseInt(dollar);
rub = prompt('сколько рублей хотите сконвертировать? ');
rub = parseInt(rub);
var euroExch = rub / euro;
var dollarExch = rub / dollar;
alert('При конвертации у вас получилось: ' + euroExch.toFixed(2) + " Евро");


// 2.Подсчет площади трапеции
// Пользователь вводит длину оснований трапеции (a и b), 
// а также высоту трапеции h. Программа выводит сообщение: 
// «Площадь трапеции будет равна <значение>». Площадь вычисляется по формуле 
// ((a + b) / 2) * h, где a, b - основания, h - высота.


alert('Cегодня вы начертите трапецию, и сообщите мне длину и высоты сторон, а я вам найду площадь трапеции, введите только цифры без название единиц.');
var a = +prompt('Введите первую длину трапеции');
var b = +prompt('Введите вторую длину трапеции');
var h = +prompt('Введите высоту трапеции');
// a = parseInt(a);
// b = parseInt(b);
// h = parseInt(h);
var square = ((a + b) / 2) * h;
alert('Площадь трапеции: ' + square + " см.");




//сумма произведение деление  2х чисел

var a = prompt('Ведите первое число');
var b = prompt('Ведите второе число');
a = parseInt(a);
b = parseInt(b);
var c = a + b;
alert("Сумма двух чисел ," + c);

var c = a * b;
alert("Произведение двух чисел ," + c);

var c = a / b;
alert("Деление двух чисел ," + c);

var c = (a + b) / 2;
alert("Среднее арифметическое двух чисел ," + c);

alert('При конвертации у вас получилось: ' + dollarExch.toFixed(2) + " Доллар");

