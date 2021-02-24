// взять todolist из предыдущих домашек и реализовать сохранение всех записей
// на "сервер" используя https://www.npmjs.com/package/json-server
// при перезагрузке страницы все сохраненные записи должны подтягиваться и
// отрисовавыться, при добалении записи она улетает на "серевер" и сохраняется

/*
Задание:
Создать список дел, в который можно:
- Добавить новый элемент
- Удалить элемент
- Задать что пункт выполнен

Шаблон элемента:
<li className="listItem">
    <input type="checkbox" className="DoneCheckbox"/>
    <span className="TodoText">{add text}</span>
    <button>Remove</button>
</li>

*/
window.addEventListener('load', function () {
    let toDoInput = document.getElementById('newToDo');
    let btnAddToDo = document.getElementById('AddToDo');
    let toDoList = document.getElementById('toDoList');

    btnAddToDo.addEventListener('click', function () {
        let itemText = toDoInput.value;

        let listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" class="DoneCheckbox" />
            <span class="TodoText">${itemText}</span>
            <button>Remove</button>
        `;

        let checkBox = listItem.querySelector('input');
        let removeBtn = listItem.querySelector('button');

        checkBox.addEventListener('input', (e) => {
            listItem.querySelector('.TodoText').classList.toggle('done');
        });

        removeBtn.addEventListener('click', function () {
            listItem.remove();
        });

        toDoList.appendChild(listItem);
    });
});
