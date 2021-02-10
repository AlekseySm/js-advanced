/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
let x = 10;
function run(newspeed) {
    if(newspeed != '') {
        this.speed = newspeed
    }
    console.log('Поезд '+ this.name+ ' везет '+ this.countUser +' со скоростью '+ this.speed)
}

function stop() {
    this.speed = 0;
    console.log('Поезд '+ this.name+ ' остановился. Cкорость '+ this.speed)
}

function addPasenger(adduser) {
    this.countUser += adduser
    console.log('Поезд подобрал пасажиров теперь их '+ this.countUser)
}


const Train = {
    name: 'Intersity',
    speed: 300,
    countUser: 100,
    run,
    stop,
    addPasenger,
}

Train.run();
Train.stop();
Train.addPasenger(x);
Train.run(320);
