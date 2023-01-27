//Получим те блоки, с которыми нам необходимо работать в JS.


// Найдем form, где записаны будут наши input.
const form = document.querySelector('#forms');
// Получим input, где пользователь должен ввести задачу. Далее мы хотим получить то, что ввел пользователь, чтобы создать todo с таким текстом.
const inputUser = document.querySelector('#user-todo-input');

// Найдем, тот блок, где будут выведены наши задачи. Т.е. такой div со списком задач. Именно в этот div мы добавим наши задачи.
let taskList = document.querySelector('.task-list');

//Получим все кнопки delete
let allDeleteButtons = document.querySelectorAll('.del');
//Получим кнопку добавить задачу
const addTaskButton = document.querySelector('.add-task-button');

// Создадим массив, куда будем добавлять объект состоящих из данных о нашем задача, т.е. выполнено оно или нет, какая задача(текст) и уникальный ID
let tasks = [];



/* Создадим несколько функций:
1) Функция которая будет создать div, внутри нее будет текст задачи полученный с inputUser и div.buttons с двумя кнопками: Выполнено. и Удалить.
2) Создаст параграф с текстом полученный из input.
3) Создаст div.buttons чтобы внутри его были две кнопки.
4) Создаст кнопку Выполнено.
5) Создаст кнопку Удалить.
*/

function addTask() {
	function createTaskDiv() {
		const taskDiv = document.createElement('div');
		taskDiv.classList.add('task-item');
		taskDiv.append(createParagraphWithText());
		taskDiv.append(createButtons());
		return taskDiv;
	}

	function createParagraphWithText() {
		const par = document.createElement('p');
		par.classList.add('task-item-text');
		// if (inputUser.value === '') {
		// 	alert('Введите текст!')
		// }
		par.innerHTML = `${inputUser.value}`;
		return par;
	}

	function createButtons() {
		const buttonsDiv = document.createElement('div');
		buttonsDiv.classList.add('buttons');

		const btnDone = document.createElement('button');
		btnDone.classList.add('done');
		btnDone.textContent = 'Done';

		const btnDel = document.createElement('button');
		btnDel.classList.add('del');

		btnDel.textContent = 'Delete';

		buttonsDiv.append(btnDone);
		buttonsDiv.append(btnDel);

		return buttonsDiv;
	}

	return createTaskDiv();
}

function deleteTask() {
	let delButtonsArray = document.querySelectorAll('.del');

	for (let i = 0; i < delButtonsArray.length; i++) {
		document.querySelectorAll('.del')[i].onclick = () => {
			document.querySelectorAll('.task-item')[i].remove();
		}
	}
}

function doneTask() {
	let doneButtonsArray = document.querySelectorAll('.done');

	for (let i = 0; i < doneButtonsArray.length; i++) {
		document.querySelectorAll('.done')[i].onclick = () => {
			document.querySelectorAll('.task-item-text')[i].classList.add('done-task');
		}
	}
}

form.addEventListener('submit', function (event) {
	event.preventDefault();
	// event.target.reset();
	taskList.append(addTask());
});

taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', doneTask);


// Добавим события для Input
inputUser.addEventListener('focus', function (event) {
	console.log(event.target.value);
})
inputUser.addEventListener('blur', function (event) {
	inputUser.placeholder = 'Add a new task'

})








