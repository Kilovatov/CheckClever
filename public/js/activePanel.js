function activePanel(panel, deadline){
    lightPanel(panel);
    deadln = deadline;
    createList(deadln);
}

function lightPanel(panel) {
    clearTabControls('tab__control__item');
    panel.classList.add('active');
}

function clearTabControls(className) {
    var controls = document.querySelectorAll('.' + className);
    for (var i = 0; i < controls.length; i++) {
        controls[i].classList.remove('active');
    }
}
