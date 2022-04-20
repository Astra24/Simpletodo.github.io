const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length != 0){
        generateTemplate(todo);
        addForm.reset();
    }else{
        alert('Please input task');
    }
});

const generateTemplate = (todo) => {
    const html = `<li class='list-group-item d-flex justify-content-between align-items-center'>
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>`;
    list.innerHTML += html;
}

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})