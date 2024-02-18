function setBackgroundColor (element){
    const backgrounds = document.getElementById(element);
    backgrounds.classList.add('bg-[#1DD100]')
}

function getElementValueByID (element){
    const elementValue = document.getElementById(element) ;
    const values = elementValue.innerText;
    const value = parseInt(value);
    return value;
}

function setInnerText (element, value){
    const text = document.getElementById(element);
    text.innerText= parseInt(value);
}

function disableButton (element){
    const disables = document.getElementById(element);
    disables.disabled = true;
}
function enableButton (element){
    const enables = document.getElementById(element);
    // enables.disable = false;
    // enables.removeAttribute('disabled', 'disabled');
}

function inputValueById (element){
    const inputValue = document.getElementById(element);
    
    console.log(inputValue)
}