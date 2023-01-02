let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function (){
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
        minValue = answerNumber  + 1;
        answerNumber  = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        var quotes = [`Вы загадали число ${answerNumber }?`, `Легко! Это число ${answerNumber }?`, `Наверное, это ${answerNumber }?`];
        var index = Math.floor((Math.random() * quotes.length)); 
        document.getElementById('answerField').innerHTML = quotes[index];
    }
}
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((maxValue - minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            var quotes = [`Вы загадали число ${answerNumber }?`, `Легко! Это число ${answerNumber }?`, `Наверное, это ${answerNumber }?`];
            var index = Math.floor((Math.random() * quotes.length)); 
            document.getElementById('answerField').innerHTML = quotes[index];
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        var quotes = [`Я всегда угадываю\n\u{1F60E}`, `Это было не так уж и сложно\n\u{1F60B}`, `Отличная игра! Попробуем ещё раз?\n\u{1F643}`];
        var index = Math.floor((Math.random() * quotes.length)); 
        document.getElementById('answerField').innerHTML = quotes[index];
    // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', reset);
      
function reset () {
    orderNumber = 0;
    orderNumberField.innerText = '';
    answerField.innerText = '';
    checkInput();
}

function checkInput () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber++;
    orderNumberField.innerText = orderNumber;
    var quotes = [`Вы загадали число ${answerNumber }?`, `Легко! Это число ${answerNumber }?`, `Наверное, это ${answerNumber }?`];
    var index = Math.floor((Math.random() * quotes.length)); 
    document.getElementById('answerField').innerHTML = quotes[index];
    gameToRun();
}

function gameToRun () {
    gameRun = true;
}
