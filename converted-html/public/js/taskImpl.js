var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#add-task');
var radioChoice = document.getElementsByName('deadline');

function Task(texts) {
    this.done = false;
    this.texts = texts;
    this.date = new Date();
    this.expired = false;
}


addTaskBtn.onclick = function(e) {
    $(".save").click();
    if (newTask.value === "") {
        return;
    }
    var task1 = new Task(newTask.value);

    for (var i = 0; i < radioChoice.length; i++) {
        if (radioChoice[i].checked) {
            list[i].push(task1);
        }
    }
    
    createList();
    newTask.value = "";
    e.preventDefault();
    e.stopPropagation();
};

function del(deleteButton) {
    $(".save").click();
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++) {
            if (deleteButton.parentNode.childNodes[2].textContent == list[i][j].texts) {
                list[i].splice(j, 1);
            }
        }
    }
    createList();
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
            for (var j = 0; j < list[i].length; j++) {
                if (oldValue == list[i][j].texts) {
                    if (input.value != "") {
                        list[i][j].texts = input.value;
                    }
                }
            }
        }
        createList();
    }
};

function check(box) {
    $(".save").click();
    for (var i = list.length - 1; i >= 0; i--) {
        for (var j = 0; j < list[i].length; j++) {
            if (box.parentNode.childNodes[2].textContent == list[i][j].texts) {
                list[i][j].done = !list[i][j].done;
            }
        }
    }
    createList();
}

function checkForExpiredTasks(){
    var now = new Date();
    for (var i=0; i< list[0].length; i++){
        var date=new Date(list[0][i].date);       
        if (date.getMinutes()!= now.getMinutes() && now>date && !list[0][i].done){
            list[0][i].expired = true;
        } else{
            list[0][i].expired = false;
        }
    }
    for (var i=0; i< list[1].length; i++){
        var date = new Date(list[1][i]);
        date.setDate(date.getDate() + (7-date.getDay())%7);        
        if (date.getDate()!= now.getDate() && now>date && !list[1][i].done){
            list[1][i].expired = true;
        }else{
            list[1][i].expired = false;
        }
    }
}