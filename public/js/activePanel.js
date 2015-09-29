var weekActive = function() {
    document.getElementById('week-box').setAttribute('class', 'active');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('day-tasks').style.display = "none";
    document.getElementById('someDay-tasks').style.display = "none";
    document.getElementById('week-tasks').style.display = "block";
    document.getElementById('weekRadio').checked=true;
}

var dayActive = function() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'active');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
    document.getElementById('week-tasks').style.display = "none";
    document.getElementById('someDay-tasks').style.display = "none";
    document.getElementById('day-tasks').style.display = "block";
    document.getElementById('todayRadio').checked=true;
}

var someDayActive = function() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('someDay-box').setAttribute('class', 'active');
    document.getElementById('day-tasks').style.display = "none";
    document.getElementById('week-tasks').style.display = "none";
    document.getElementById('someDay-tasks').style.display = "block";
    document.getElementById('oneDayRadio').checked=true;
}

var allActive = function() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'active');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
    document.getElementById('day-tasks').style.display = "block";
    document.getElementById('someDay-tasks').style.display = "block";
    document.getElementById('week-tasks').style.display = "block";
}