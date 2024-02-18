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
    const disable = document.getElementById(element);
    disable.disabled = true;
}