//----------- hello-------

alert('привет , мир');
alert('привет , земля');

//---------- loops --------

// вывести слово 5 раз на экран
// Привет! <br/>
// Привет! <br/>
// Привет!<br/>
// Привет!<br/>
// Привет!<br/>
// Привет!<br/> 


for (var i = 0; i < 5; i++) {
    document.write('Привет! <br/>');
}
// var i = 0;
// while(i<5){
// 	document.write('Привет! <br/>');
// 	i ++; //i = i+1;

//------ max ----------
// найти максимальное число

var a = + prompt('Введите первое число');
var b = + prompt('Введите второе число');
var max = a;
if (a < b) {
    max = b
}
// if (a>b){
// 	var max =a;
// } else if (a==b){
// 	alert('числа равны');
// 	max =a;
// } else {
// 	max = b;
// }
alert(max)



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


//-----------draft --------------


// 1-  принимать на вход числа и вернуть только те числа которые делятся
// без остатка на 2


function honestArray(array) {
    var honest = [];
    for (var i = 0; i != array; i += 1) {
        if (array[i] % 2 == 0) {
            honest.push(array[i]);
        } else {
            continue;
        }
    }
    return honest
}

var array = [1, 2, 3, 4];
alert(honestArray(array));

//---------------- english -------

// 2- выучить новые слова, если выучил то переходим на следующий уровень

function askForWords(words) {

    while (words.length != 0) {
        var i = parseInt(Math.random() * words.length);
        var userTranslate = prompt("'Как переводится слово: '" + words[i][0]);
        if (userTranslate == words[i][1]) {
            alert('Правильно!');
            words.splice(i, 1);
        } else {
            alert('Правильный ответ: ' + words[i][1]);
        }
    }

}

var easyWords = [
    ['food', 'еда'],
    ['bike', 'велосипед'],
    ['apple', 'яблоко'],
    ['do', 'делать'],
    ['mean', 'иметь в виду']
];

askForWords(easyWords);

alert('Поздравляю, вы запомнили все слова! Переходим на следующий уровень!');

var hardWord = [
    ['chainsaw', 'бензопила'],
    ['squirrel', 'белка'],
    ['castle', 'замок'],
    ['homeland', 'родина'],
    ['sewerage', 'канализайия'],
    ['bottom', 'дно']
];

askForWords(hardWord);


//---------- func_retun----------

// ишем факториал, ишем максимальное число


function getRandomNumber(max) {
    // var rand = Math.round(Math.random()* max);
    // return rand;
    return Math.round(Math.random() * max);
}

function max(a, b) {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

var f = factorial(5)
var a = max(34, 68)
var c = max(a, 98) + 4;
var n = getRandomNumber(100);
var m = getRandomNumber(4);


//--------- function ----------


// ГЕНЕРАЦИЯ МАССИВА
function array(n) {
    // 	var array = []                  //  это примет учителя
    // 	for(var i=1; i < n; i++);
    // 		array.push(i);
    // return array;

    var N = []
    for (var i = 1; (i + 1) <= (n + 1); N.push(i++));
    return N;
}

// СУММА МАССИВА
// function summ(array){              // ПРИМЕР УЧИТЕЛЯ
// 	var summ = 0;
// 	for(var i = 0; i < array.length; i++){
// 		summ += array[i];
// 	}
// 	return summ;
// }
function summArray(array) {
    var summ = 0;
    for (var i = 0; i != 4; i = i + 1) {
        summ = summ + array.pop();

    }
    return summ;
}

// МАКСИМАЛЬНОЕ ЧИСЛО
function maxArray(array) {
    // 	var max = array[0];                         // ПРИМЕР УЧИТЕЛЯ
    // 	for(var i = 1; i < array.length; i++){
    // 		if(array[i]> max)
    // 			max = array[i];
    // 	}
    // 	return max;
    // }
    var max = 0;
    for (var i = 0; i != 4; i += 1) {
        if (max < array[i]) {
            max = array[i];
        } else {
            max = max;
        }
    }
    return max;
}

//МИНИМАЛЬНОЕ ЧИСЛО
function minArray(array) {
    // ПРИМЕР АНАЛАГИЧЕН MAX
    var min = array[0];
    for (var i = 0; i != 4; i += 1) {
        if (min > array[i]) {
            min = array[i];
        } else {
            min = min;
        }
    }
    return min;

}
// ИШЕМ ЧЕТНОЕ ЧИСЛО
function honestArray(array) {
    var honest = [];
    //for(var i =0; i < array.length; i++)  ПРИМЕР УЧИТЕЛЯ
    for (var i = 0; i != 4; i += 1) {
        if (array[i] % 2 == 0) {
            honest.push(array[i]);
        } else {
            continue;
        }
    }
    return honest
}


// var array = array(5);
// alert(array);
// alert(summ(array));      ПРИМЕТ УЧИТЕЛЯ . И Т.Д

alert(array(6));
alert(honestArray(array(6)));
alert(summArray(array(6)));
alert(maxArray(array(6)));
alert(minArray(array(6)));


//-------------- guesing-game -------------

// 3. Дописать игру “Угадай число” (по желанию)
// Сделать игру с двумя игроками и бесконечным числом попыток. 
// Сделайте возможность выйти из игры по желанию одного из игроков.

var answer = parseInt(Math.random() * 100);
var playrNumber = 1;

while (true) {
    var userAnswer = prompt('Угадайте число от 0 до 100.\n Ходит игрок ' + playrNumber + '.\n Для выхода нажмите q');

    if (userAnswer == 'q')
        break;

    userAnswer = parseInt(userAnswer);

    if (userAnswer == answer) {
        alert('Поздравляю, победил игрок ' + playrNumber);
        break;
    } else if (userAnswer > answer) {
        alert('Вы ввели слишком большое число!');
    } else if (userAnswer < answer) {
        alert('Вы ввели слишком малеькое число!');
    }
    if (playrNumber == 1)
        playrNumber = 2;
    else
        playrNumber = 1;
}

alert('Правильный ответ: ' + answer);


//-- вариант второй ---

var answer = parseInt(Math.random() * 100);

while (true) {
    var userAnswer = prompt('Угадайте число от 0 до 100.  Для выхода нажмите q');

    if (userAnswer == 'q')
        break;

    userAnswer = parseInt(userAnswer);

    if (userAnswer == answer) {
        alert('Поздравляю, вы угадали!');
        break;
    } else if (userAnswer > answer) {
        alert('Вы ввели слишком большое число!');
    } else if (userAnswer < answer) {
        alert('Вы ввели слишком малеькое число!');
    }
}

alert('Правильный ответ: ' + answer);


//--- вариант третий -------

var answer = parseInt(Math.random() * 100);
var userAnswer = +prompt('Угадайте число от  0 до 100');
var maxTryCount = 2;

for (var tryCount = 1; tryCount < maxTryCount; tryCount++) {

    if (userAnswer == answer) {
        alert('Поздравляю вы угадали!');
        break;
        //continue; сразу переводим к слеуюшкй итерации
    } else if (userAnswer > answer) {
        alert('Вы ввели слишком большое число, ');
    } else if (userAnswer < answer) {
        alert('Вы ввели слишком маленькое числою, ');
    }


    userAnswer = +prompt('Попробуйте еще раз , введите число от  0 до 100\n У вас осталось ' + (maxTryCount - tryCount) + ' попыток');
}
if (tryCount == maxTryCount) {
    alert('Вы проиграли!');
    break
}

document.write('Правильный овет: ' + answer);
