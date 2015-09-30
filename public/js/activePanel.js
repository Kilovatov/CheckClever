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
    document.getElementById('week-box').classList.add('active');
    document.getElementById('day-box').classList.remove('active');
    document.getElementById('someDay-box').classList.remove('active');
    document.getElementById('all').classList.remove('active');
    document.getElementById('weekRadio').checked=true;
}

function dayActive() {
    document.getElementById('week-box').classList.remove('active');
    document.getElementById('day-box').classList.add('active');
    document.getElementById('someDay-box').classList.remove('active');
    document.getElementById('all').classList.remove('active');
    document.getElementById('todayRadio').checked=true;
}

function someDayActive() {
    document.getElementById('week-box').classList.remove('active');
    document.getElementById('day-box').classList.remove('active');
    document.getElementById('someDay-box').classList.add('active');
    document.getElementById('all').classList.remove('active');
    document.getElementById('oneDayRadio').checked=true;
}

function allActive() {
    document.getElementById('week-box').classList.remove('active');
    document.getElementById('day-box').classList.remove('active');
    document.getElementById('someDay-box').classList.remove('active');
    document.getElementById('all').classList.add('active');
}