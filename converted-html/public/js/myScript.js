var containerToday = document.querySelector('#day-tasks');
var containerWeek = document.querySelector('#week-tasks');
var containerOneDay = document.querySelector('#someDay-tasks');
var container = [containerToday, containerWeek, containerOneDay];
var toDoToday = document.createElement('div');
var toDoWeek = document.createElement('div');
var toDoOneDay = document.createElement('div');
var toDo = [toDoToday, toDoWeek, toDoOneDay];

var anyDay = [],
    week = [],
    today = [];
var key = '_Storage';
var list = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [anyDay, week, today];

var templater = function(html) {
    return function(data) {
        for (var x in data) {
            var re = "{{\\s?" + x + "\\s?}}";
            html = html.replace(new RegExp(re, "ig"), data[x]);
        }
        return html;
    };
};

var createList = function() {
    checkForExpiredTasks();
    for (var i = 0; i < list.length; i++) {
        toDo[i].innerHTML = '';
        for (var j = 0; j < list[i].length; j++) {
            var template = templater(
                '<section class="task">' +
                ' <input type="checkbox" onclick="check(this)">' +
                '<p>{{ task }}</p>' +
                '<button class="btn btn-default" onclick="del(this)">delete</button>' +
                '<button type="button" class="btn btn-default" onclick="edt(this)">edit</button>' +
                '</section>');
            toDo[i].innerHTML += template({
                task: list[i][j].texts
            });

            //implimentation for done task
            if (list[i][j].done) {
                toDo[i].lastChild.childNodes[2].setAttribute('class', 'done');
                toDo[i].lastChild.childNodes[1].setAttribute('checked', 'true');
                toDo[i].lastChild.childNodes[4].remove();
            }
            if (list[i][j].expired) {
                toDo[i].lastChild.childNodes[2].setAttribute('class', 'expired');
            }
        }
        container[i].appendChild(toDo[i]);
    }
    save();
}

function save() { //impimentation of local storage for our task list
    localStorage.setItem(key, JSON.stringify(list));
}

createList();
