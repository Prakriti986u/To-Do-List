let listContainer = document.getElementById('list-container')

let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value == ''){
        alert('Add Your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputBox.value
        listContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = '\u00d7';
        task.appendChild(span)
    }
    inputBox.value = ''
    saveDate()
}

listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
       el.target.classList.toggle('checked') 
       saveDate()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
    }
})

function saveDate(){
    localStorage.setItem("tasks", listContainer.innerHTML)
}

function showDate(){
    listContainer.innerHTML = localStorage.getItem('task')
}

showData()