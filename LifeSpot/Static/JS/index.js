﻿/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
let session = new Map();



function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
    //// создадим объект Map для хранения сессии
    //let session = new Map();
    //// Сохраним UserAgent
    //session.set("userAgent", window.navigator.userAgent)



    /*
    * Функция для проверки и сохранения  данных пользователя
    * Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
    *
    * */

    /*
    * Сохранение данных сессии сразу при заходе пользователя на страницу
    * 
    * */
    function handleSession() {
        // Сохраним время начала сессии
        session.set("startDate", new Date().toLocaleString())
        // Сохраним UserAgent
        session.set("userAgent", window.navigator.userAgent)
    }

    /*
    * Вывод данных сессии в консоль
    * 
    * */
    let sessionLog = function logSession() {
        for (let result of session) {
            console.log(result)
        }
    }


    /*
    * Проверка возраста пользователя
    * 
    * */
    function checkAge() {
        session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

        if (session.get("age") >= 18) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
        else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
    }

