var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#add-task');
var radioChoice = document.getElementsByName('deadline');
var deadln;

function Task(texts, deadline) {
    this.done = false;
    this.texts = texts;
    this.date = new Date();
    this.expired = false;
    this.deadline = deadline;
}


addTaskBtn.onclick = function(e) {
    $(".save").click();
    if (newTask.value === "") {
        return;
    }
    for (var i = 0; i < radioChoice.length; i++) {
        if (radioChoice[i].checked) {
            var task1 = new Task(newTask.value, radioChoice[i].value);
            list.push(task1);
            activePanel(radioChoice[i].value);
        }
    }
    newTask.value = "";
    e.preventDefault();
    e.stopPropagation();
};

function del(deleteButton) {
    $(".save").click();
    for (var i = 0; i < list.length; i++) {
        if (deleteButton.parentNode.childNodes[2].textContent == list[i].texts) {
            list.splice(i, 1);

        }
    }
    createList(deadln);
}

function edt(text) {
    $(".save").click();
    var tsk = text.parentNode;
    var oldValue = tsk.childNodes[2].textContent;
    tsk.innerHTML = "";
    var input = document.createElement("input");
    input.value = oldValue;
    input.setAttribute("class", "form-control change-task");
    tsk.appendChild(input);
    var saveButton = document.createElement("button");
    saveButton.textContent = "save";
    saveButton.setAttribute("class", "save btn btn-default");
    tsk.appendChild(saveButton);

    saveButton.onclick = function() {

        for (var i = 0; i < list.length; i++) {
            if (oldValue == list[i].texts) {
                if (input.value != "") {
                    list[i].texts = input.value;

                }
            }

        }
        createList(deadln);
    }
};

function check(box) {

    $(".save").click();
    for (var i = list.length - 1; i >= 0; i--) {
        if (box.parentNode.childNodes[2].textContent == list[i].texts) {
            list[i].done = !list[i].done;

        }
    }

    createList(deadln);
}

function checkForExpiredTasks() {
    var now = new Date();
    for (var i = 0; i < list.length; i++) {
        var date = new Date(list[i].date);
        if (date.getMinutes() != now.getMinutes() && now > date && !list[i].done && list[i].deadline == "today") {
            list[i].expired = true;
        } else {
            date.setDate(date.getDate() + (7 - date.getDay()) % 7);
            if (date.getDate() != now.getDate() && now > date && !list[i].done && list[i].deadline == "week") {
                list[i].expired = true;
            } else {
                list[i].expired = false;
            }
        }
    }
}
