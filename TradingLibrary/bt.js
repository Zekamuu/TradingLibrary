const sidePopup = document.getElementById('sidePopup');
const menu = document.getElementById('menuButton');
const addInd = document.getElementById('add-indicator-button');
const indMenu = document.getElementById('add-indicator-menu');
const createStrategy = document.getElementById('create-strategy');
const strategyMenu = document.getElementById('strategy-menu');
const strategyMenuClose = document.getElementById('strategy-menu-close-btn');
menu.onmouseover = () => {
    menu.classList.add('hover');
}

menu.onclick = () => {

    if(sidePopup.classList.contains('open')){
        sidePopup.classList.remove('open');
    }
    else{
        sidePopup.classList.add('open');
    }
}


createStrategy.onclick = () => {

    strategyMenu.classList.add('open');


}
strategyMenuClose.onclick = () => {
    strategyMenu.classList.remove('open');
}