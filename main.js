
function addTask() {
  var task = document.getElementById("newTask").value;
  if (task) {
    var list = document.getElementById("taskList");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(task));
    
    var delButton = document.createElement("button");
    delButton.textContent = "DELETE";
    delButton.addEventListener("click", function() {
      list.removeChild(item);
    });
    item.appendChild(delButton);
    list.appendChild(item);
    document.getElementById("newTask").value = "";
  }
}