import Request from './Request.js';

function dealWithForm(e) {
    e.preventDefault();
    let request = new Request();
    let inputs = document.querySelectorAll('input');

    request.getInputs(inputs);
}

document.querySelector('#form').addEventListener('submit', dealWithForm);
