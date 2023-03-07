let input = document.querySelector(".entered-list");
let addBtn = document.querySelector(".add-list");

let tasks = document.querySelector(".tasks");

//add button disable

input.addEventListener('keyup',()=>{
    if(input.value.trim() !== 0){
        addBtn.classList.add("active")
    }
    else{
        addBtn.classList.remove("active")
    }
})

//add new item

addBtn.addEventListener('click',()=>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <div class="edit">Edit</div>
            <div class="del">Delete</div>
        </div>
        `
        tasks.appendChild(newItem);
        input.value='';
    }
    else{
        alert("Kindly enter a task")
    }
})

//delete item

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('del')){
        e.target.parentElement.parentElement.remove();
    }
})


//edit item

tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('edit')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})





