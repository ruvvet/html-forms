//FUNCTION EXPRESSIONS
// set var = a function


//init function, add events to reset and send buttons (STEP 2)
const init = function () {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);

};

const reset = function (ev){
    // put form back to initial state

    //preventDefault event (aka ev >> needs to go into each click event?)
    ev.preventDefault();

    //reset via document method "reset"
    document.getElementById('form-user').reset();

    //other actions

};

// check all elements on page
//
const validate = function () {
    let valid = false;
    //if any elements fail, pass into failures array and display
    let failures = [];

    const first = document.getElementById('input-first');
    const password = document.getElementById('input-password');
    const email = document.getElementById('input-email');
    const select =document.getElementById('input-age');
    const check = document.getElementById('input-alive');

    const ele = ['input-first', 'input-password', 'input-email', 'input-age',
    'input-alive']

    {first, password, email, select, check} = ele.map(val => {return document.getElementById(`${val}`)})

    //validating each condition with separate logic elememts for each form ele

    // fails if empty
    //if(first.value === ''
    if (!first.value){
        failures.push({input: 'input-first', msg: 'required failed'});

    }
    // fail if email is empty and has no @
    if (!email.value || !email.value.includes('@')){
        failures.push({input: 'input-email', msg: 'required failed'});

    }

    //fails if empty and less than 8 char
    if(!password.value || password.value.length <8) {
        failures.push({input: 'input-password', msg: '8 char min'});
    }

    //logic for select age element
    //select is an array of choices
    // selects index, '<20' which is index 0
    if (select.selectedIndex ===0){
        //if empty, fails
        failures.push({input: 'input-password', msg: 'too young'});
    }

    if (!check.checked){
        failures.push({input: 'input-password', msg: 'pls be alive'});
    }

    return failures;
};

//use send function to make sure each element in form has an input
const send = function (ev) {
    ev.preventDefault();
    //ev.stopPropagation(); // stops bubbling up to parents

    let fails = validate();

    if (fails.length === 0) {
        // if no fails, can submit
        document.getElementById('form-user').submit();
    } else {
        // if fails, give errors
        fails.forEach(obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }

};

// listen for dom contennt loaded event, then run function with init (STEP 1)
document.addEventListener('DOMContentLoaded', init);


// FUNCTION DECLARATION
//
//function init () {}