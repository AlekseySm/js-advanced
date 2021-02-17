/*
  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

window.addEventListener('load', () => {

    const App = document.getElementById('app');

    function User (name, text, avatar ) {
        this.name = name;
        this.text = text;
        this.avatar = avatar || 'computer-icons-user-profile-head-ico-download.jpg';
        this.like = 0;

        this.addLike = () => {
            this.like++
        }
    }

    const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'

    let Jony = new User('Jony', defaultText);
    let Petya = new User('Petya', defaultText);
    let Karl = new User('Karl', defaultText);
    let Mary = new User('Mary', defaultText, '163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png');

    let Users = [];
    Users.push(Jony, Petya, Karl, Mary, new User('Test', 'bla bla bla'));

    Users.forEach((user) =>{
        let userDiv = document.createElement('div'),
            list = document.createElement('ul'),
            textName = document.createElement('li'),
            textText = document.createElement('li'),
            textAvatar = document.createElement('li'),
            textLike = document.createElement('li'),
            buttonLike = document.createElement('li');

        textName.innerHTML = user.name;

        textText.innerHTML = user.text;

        let img = document.createElement('img');
        img.src = `img/${user.avatar}`;
        textAvatar.append(img);

        textLike.innerHTML = user.like;

        let button = document.createElement('button');
        button.innerHTML = 'add like!';
        button.addEventListener('click', ()=>{
            user.addLike();
            textLike.innerHTML = user.like;
        })
        buttonLike.append(button);

        list.append(textName, textText, textAvatar, textLike, buttonLike);
        userDiv.append(list);
        App.append(userDiv);
    })
});