var cnt = 0
const add_details = (task) => {
    let newTaskElement = document.createElement("div");
    let newpara = document.createElement("p");
    let newcheckbox = document.createElement("input");
    newcheckbox.type = "checkbox";

    newpara.classList.add('task-cls');
    newcheckbox.classList.add("check-cls")
    newpara.append(task); 
    
    
    cnt++;
    newcheckbox.id = `taks${cnt}`;
    

    newcheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            newpara.style.textDecoration = "line-through"; 
            newpara.style.fontWeight = "lighter";
            newpara.style.color = "gray";
        }
        else {
            newpara.style.textDecoration = "none";
            newpara.style.fontWeight = "bold";
            newpara.style.color = "black";
        }
    });

    newTaskElement.append(newcheckbox)
    newTaskElement.appendChild(newpara);

    return newTaskElement;
};

const btn = document.getElementById("task_add")

btn.addEventListener('click',()=>{
  
    let task = document.querySelector(".write_here").value
    
    
    let area_write = document.getElementsByClassName("added_task");

    if (area_write.length >= 0) {
        let newTaskElement = add_details(task)  
        newTaskElement.classList.add('child')   
        area_write[0].appendChild(newTaskElement); 

        // Clear the input field
        document.querySelector(".write_here").value = "";
        
    }
    
})