var container = document.getElementById('box');
var toDo = document.createElement('div');

var key = '_Storage';
var list = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

var templater = function(html) {
    return function(data) {
        for (var x in data) {
            var re = "{{\\s?" + x + "\\s?}}";
            html = html.replace(new RegExp(re, "ig"), data[x]);
        }
        return html;
    };
};

function renderList(list) {
    checkForExpiredTasks();
    toDo.innerHTML = '';
    for (var i = 0; i < list.length; i++) {
        var template = templater(
            '<section class="task">' +
            ' <input type="checkbox" onclick="check(this)">' +
            '<p>{{ task }}</p>' +
            '<button class="btn btn-default" onclick="del(this)">delete</button>' +
            '<button type="button" class="btn btn-default" onclick="edt(this)">edit</button>' +
            '</section>');
        toDo.innerHTML += template({
            task: list[i].texts
        });

        //implimentation for done task
        if (list[i].done) {
            toDo.lastChild.childNodes[2].setAttribute('class', 'done');
            toDo.lastChild.childNodes[1].setAttribute('checked', 'true');
            toDo.lastChild.childNodes[4].remove();
        }
        if (list[i].expired) {
            toDo.lastChild.childNodes[2].setAttribute('class', 'expired');
        }
    }
    container.appendChild(toDo);
    save();
}

function createList(deadline) {
    switch (deadline) {
        case "today":
            var list1 = list.filter(function(task) {
                return task.deadline == "today";
            });
            renderList(list1);
            break;
        case "week":
            var list1 = list.filter(function(task) {
                return task.deadline == "week";
            });
            renderList(list1);
            break;
        case "oneDay":
            var list1 = list.filter(function(task) {
                return task.deadline == "oneDay";
            });
            renderList(list1);
            break;
        default:
            renderList(list);
    }
}

function save() { //impimentation of local storage for our task list
    localStorage.setItem(key, JSON.stringify(list));
}

createList(list);
