function addTask() {
    var input = document.getElementById("taskInput").value;
    if(input === ""){
        alert("Please enter a task");
        return
    }
    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    taskList.appendChild(li);
    document.getElementById("taskInput").value = "";
}
document.getElementById("taskInput").addEventListener("keypress", function(enter) {
    if(event.key === "Enter"){
        addTask();
    }
});