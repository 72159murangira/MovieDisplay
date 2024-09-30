
let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

function init() {
    WriteCounter(counter);

    // Set up button click handlers using jQuery
    $('#btnAdd').on('click', btnAdd);
    $('#btnMinus').on('click', btnMinus);
    $('#btnReset').on('click', btnReset);
}

function btnAdd() {
    counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
    WriteCounter(counter);
}

function btnMinus() {
    counter = --counter >= counterMinLimit ? counter : counterMinLimit;
    WriteCounter(counter);
}

function btnReset() {
    counter = 0;  // Reset counter to zero
    WriteCounter(counter);
}

function WriteCounter(num) {
    $('#counterResult').html(num);
}
