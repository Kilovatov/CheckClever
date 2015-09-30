function activePanel(deadline){
    switch(deadline){
        case 'today':
            dayActive();        
            break;
        case 'week':
            weekActive();
            break;
        case "oneDay":
            someDayActive();    
            break;
        default:
            allActive();
    }
    deadln = deadline;
    createList(deadln);
}


function weekActive() {
    document.getElementById('week-box').setAttribute('class', 'active');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('weekRadio').checked=true;
}

function dayActive() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'active');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
    document.getElementById('todayRadio').checked=true;
}

function someDayActive() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'unactive');
    document.getElementById('someDay-box').setAttribute('class', 'active');
    document.getElementById('oneDayRadio').checked=true;
}

function allActive() {
    document.getElementById('week-box').setAttribute('class', 'unactive');
    document.getElementById('day-box').setAttribute('class', 'unactive');
    document.getElementById('all').setAttribute('class', 'active');
    document.getElementById('someDay-box').setAttribute('class', 'unactive');
}