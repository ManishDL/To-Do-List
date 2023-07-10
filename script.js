const task=document.getElementById("input-box");
const task_list=document.getElementById("task-list");
function addtask(){
    if(task.value==='')
        alert(" add your task")
    else{
        var list=document.createElement('li');
        list.innerHTML=task.value;
        task_list.appendChild(list)
        let span=document.createElement('span');
        span.innerHTML="\u00d7"
        list.appendChild(span);
    }
    task.value="";
    save();
}
task_list.addEventListener('click',function(e){
    if(e.target.tagName==="LI")
        {
            e.target.classList.toggle("task");
            save();
        }
    if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
            save();
        }
});
function save()
{
    localStorage.setItem("data",task_list.innerHTML);
}
function show()
{
    task_list.innerHTML=localStorage.getItem("data");
}
show();