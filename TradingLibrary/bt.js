const sidePopup = document.getElementById('sidePopup');
const menu = document.getElementById('menuButton');
const addInd = document.getElementById('add-indicator-button');
const indMenu = document.getElementById('add-indicator-menu');
const closeIndMenu = document.getElementById('close-indicator-menu');
const createStrategy = document.getElementById('create-strategy');
const strategyMenu = document.getElementById('strategy-menu');
const strategyMenuClose = document.getElementById('strategy-menu-close-btn');
const candlesBack = document.getElementById('candles-back');
const indDoneButton = document.getElementById('indicator-done-button');
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

addInd.onclick = () => {
    indMenu.classList.add('open');
}
closeIndMenu.onclick = () => {
    indMenu.classList.remove('open');
}

const indicatorSelect = document.getElementById('indicator');


indicatorSelect.onchange = () => {
    const selectedValue = indicatorSelect.value;
    if (selectedValue === 'sma') {
        candlesBack.classList.add('open');
        indDoneButton.classList.add('show');
        
    } else if (selectedValue === 'ema') {
        // Handle Exponential Moving Average selection
        candlesBack.classList.add('open');
        indDoneButton.classList.add('show');
    } else {
        // Handle other selections
        candlesBack.classList.remove('open');
        indDoneButton.classList.remove('show');
    }
};

indDoneButton.onclick = () =>{

}


//Parameters
const stocksTicker = "AAPL";
const multiplier = 1;
const timespan = "day";
const fromDate = "2024-01-01";
const toDate = "2024-12-31";



const link = `https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/${multiplier}/${timespan}/${fromDate}/${toDate}?adjusted=true&sort=asc&apiKey=RjEKcpbPUYIp20lTfWcN04ZkNzTl1joP`;
let fetchedData;

fetch(link)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data);
        fetchedData = response;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
