var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li=ul.children;

function inputLength() {
    return input.value.length;
}

function DeleteOption(par) {
    var del = document.createElement('button');
    del.appendChild(document.createTextNode('Delete'));
    par.appendChild(del);
    del.addEventListener('click', function(){
        del.parentElement.remove();
    })
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    DeleteOption(li);
    ul.appendChild(li);
    input.value = '';
    li.addEventListener('click',function(){
        li.classList.toggle('done');
        });
}

Object.values(li).forEach(function(todo){
    DeleteOption(todo);
    todo.addEventListener('click',function(){
    todo.classList.toggle('done');
    })
    })

function addListAfterClick() {
    if(inputLength()>0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength()>0 && event.keyCode===13) {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
