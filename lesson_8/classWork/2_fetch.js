document.addEventListener('DOMContentLoaded', () => {
    fetch('http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2')
        .then((res) => {
            return res.json()
        }).then((human) =>{
        let user = human[Math.floor(Math.random()*human.length)];
        console.log(user);
        return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
            .then((res) => {
                return res.json();
            }).then((friends) => {
                console.log(friends);
                let humanArr = {};
                humanArr.name = user.name;
                humanArr.friends = friends[0].friends;
                console.log(humanArr)

                let html = `
                                <div>${user.name}</div>
                                <br>
                                <br>
                                <div>Friends</div>
                                <ul>
                                ${humanArr.friends.map((friend) => {
                                    return `<li>${friend.name}</li>`;
                                }).join('')}
                                </ul>
                            `;
                document.getElementById('app').innerHTML = html;
            })
    })
})

/*
  Задача:

  1. При помощи fetch получить данные:
     http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
     http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
     И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

     Подсказка нужно вызвать дополнительный fecth из текущего чейна.
     Для того что бы передать результат выполнения доп. запроса
     в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
