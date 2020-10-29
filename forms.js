// //FUNCTION EXPRESSIONS
// // set var = a function


// //init function, add events to reset and send buttons (STEP 2)
// const init = function () {
//     document.getElementById('button-cancel').addEventListener('click', reset);
//     document.getElementById('button-send').addEventListener('click', send);

// };

// const reset = function (ev){
//     // put form back to initial state

//     //preventDefault event (aka ev >> needs to go into each click event?)
//     ev.preventDefault();

//     //reset via document method "reset"
//     document.getElementById('form-user').reset();

//     //other actions

// };

// // check all elements on page
// //
// const validate = function () {
//     let valid = false;
//     //if any elements fail, pass into failures array and display
//     let failures = [];

//     const first = document.getElementById('input-first');
//     const password = document.getElementById('input-password');
//     const email = document.getElementById('input-email');
//     const select =document.getElementById('input-age');
//     const check = document.getElementById('input-alive');

//     //validating each condition with separate logic elememts for each form ele

//     // // fails if empty
//     // //if(first.value === ''
//     // if (!first.value){
//     //     failures.push({input: 'input-first', msg: 'required failed'});

//     // }
//     // // fail if email is empty and has no @
//     // if (!email.value || !email.value.includes('@')){
//     //     failures.push({input: 'input-email', msg: 'required failed'});

//     // }

//     // //fails if empty and less than 8 char
//     // if(!password.value || password.value.length <8) {
//     //     failures.push({input: 'input-password', msg: '8 char min'});
//     // }

//     // //logic for select age element
//     // //select is an array of choices
//     // // selects index, '<20' which is index 0
//     // if (select.selectedIndex === 0){
//     //     //if empty, fails
//     //     failures.push({input: 'input-password', msg: 'too young'});
//     // }

//     // if (!check.checked){
//     //     failures.push({input: 'input-password', msg: 'pls be alive'});
//     // }

//     // return failures;


// };

// //use send function to make sure each element in form has an input
// const send = function (ev) {
//     ev.preventDefault();
//     //ev.stopPropagation(); // stops bubbling up to parents

//     let fails = validate();

//     if (fails.length === 0) {
//         // if no fails, can submit
//         document.getElementById('form-user').submit();
//     } else {
//         // if fails, give errors
//         fails.forEach(obj => {
//             const field = document.getElementById(obj.input);
//             field.parentElement.classList.add('error');
//             field.parentElement.setAttribute('data-errormsg', obj.msg);
//         })
//     }

// };

// // listen for dom contennt loaded event, then run function with init (STEP 1)
// document.addEventListener('DOMContentLoaded', init);


// // FUNCTION DECLARATION
// //
// //function init () {}



const init = function() {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);
};

const reset = function(ev) {
    // HTML will automically put the form back to the initial state
    // unless we do that
    ev.preventDefault();
    // we can reset programmatically
    document.getElementById('form-user').reset();

    // if you want to do anything else, you can .....
};

const validate = function() {
    // let valid = true;
    let failures = [];

    const first = document.getElementById('input-first');
    const email = document.getElementById('input-email');
    const password = document.getElementById('input-password');
    const select = document.getElementById('input-age'); // .selectedIndex .options .length .selectedValue .value
    const chk = document.getElementById('input-alive'); // .checked .value

    // logic for first (element)
    if (first.value === '') { // empty string ('') is a falsy value
        failures.push({ input: 'input-first', msg: 'Required field'});
    }
     // logic for email (element)
    if (email.value === '' || !email.value.includes('@')) {
        failures.push({ input: 'input-email', msg: 'Required field'});
    }
    // logic for password (element)
    if (password.value === '' || password.value.length < 8) {
        failures.push({ input: 'input-password', msg: 'Must be at least 8 characters'});
    }

    // logic for select (element)
    if (select.selectedIndex === 0) {
        failures.push({ input: 'input-age', msg: 'Too young...'});
    }

    // logic for chk (element)
    if (!chk.checked) {
        failures.push({ input: 'input-alive', msg: 'Must be alive to submit form'});
    }

    return failures;

};

const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation(); // bubbling up to any parent element (the click)

    let fails = validate();

    if (fails.length === 0) {
        // good to go
        document.getElementById('form-user').submit();
    } else {
        // bad user
        fails.forEach(obj => {
            const field = document.getElementById(obj.input);
            field.parentElement.classList.add('error');
            field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }

};

document.addEventListener('DOMContentLoaded', init);