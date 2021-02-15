/*
    Общая инфа про время и конструктор даты в JavaScript
*/

document.addEventListener('DOMContentLoaded', function(){

    /*
        Kонструктор Date по умолчанию создает объект с текущей датой и временем:
    */


    // Case 1
    // let today = new Date();
    // console.log('today', today );

    // Case 2
    // Создает объект Date, значение которого равно количеству миллисекунд (1/1000 секунды), прошедших с 1 января 1970 года 
    // 24 часа после 01.01.1970 (Считаем кол-во мс)
    
    // let Jan02_1970 = new Date( 60*60*24*1000 );
    // console.log('Jan02_1970', Jan02_1970, 60*60*24*1000);
    
    // let myNewDate = new Date(1510876800000);
    // console.log('myNewDate', myNewDate);

    /*
        Case 3
        String formats
        new Date(dateString)

        Mожно использовать один из форматов:
        "October 13, 1975 11:13:00"
        "October 13, 1975 11:13"
        "October 13, 1975"
        2010/08/17 12:09:36

    */
    
    // let dateString = "October 13, 1975";
    // let manyYearsAgo = new Date(dateString);
    // console.log('Many Years Ago:', manyYearsAgo);

    /*
        Case 4
        https://www.w3schools.com/js/js_dates.asp - все форматы с примерами
        
        new Date(year, month, date, hours, minutes, seconds, ms)
        Год year должен быть из 4 цифр.
        Отсчет месяцев month начинается с нуля 0.

    */

    // let detailedDate = new Date(2019, 6, 1, 2, 3, 4, 567);
    // console.log('detailedDate', detailedDate);


    /*  
        Case 5
        From input
    */
    
    // function getDate(  ){
    //     const dateInput = document.getElementById('dateInput');
    //     console.log(dateInput.value)
    //     const ourDate = new Date( dateInput.value );
    //     console.log( ourDate );
    // }
    // const getDateBtn = document.getElementById('getDateBtn');
    // getDateBtn.addEventListener('click', getDate );

});
