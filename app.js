const btn = document.querySelector('.addButton');
const input = document.querySelector('.input');
const ul = document.querySelector('.ul');


function shoppingList () {
    if (input.value){
        const list = document.createElement('li');
        list.textContent = input.value;
        list.innerHTML = `${input.value} <button class='delete_btn' the_button='btn'>delete</button>`;
        ul.prepend(list.cloneNode(true));
        input.value = '';
    };
};

btn.addEventListener('click', shoppingList);

// event listenter in the input, listing for enter key to be pressed.
input.addEventListener('keydown', function(k) {
    if (k.keyCode == '13') shoppingList()
});

ul.addEventListener('click', function (k) {
    // addin the done functionality (the line through, when you done something).
    if (k.target.tagName == "LI"){
        k.target.classList.toggle('done');
    };

    // deleting the list item, when the delete button is pressed
    if (k.target.getAttribute('the_button') == "btn"){
        k.target.parentElement.remove();
    };
});

// *********************
// You can style the look of the website and the todo list.
// You can do that with css, in here we just worked in js.


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const color1 = document.querySelector('.color_1');
const color2 = document.querySelector('.color_2');
const body = document.querySelector('body');

const backgroundColor = function () {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};

color1.addEventListener('input', backgroundColor);
color2.addEventListener('input', backgroundColor);

// You have to give the event listener of "input", because it is the right
// event listener for checking the values of the color on changeing.
 
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////









