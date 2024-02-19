function setBackgroundColor (element){
    const backgrounds = document.getElementById(element);
    backgrounds.classList.add('bg-[#1DD100]')
}
function removeBackgroundColor (element){
    const backgrounds = document.getElementById(element);
    backgrounds.classList.remove('bg-[#1DD100]')
}
function getElementValueByID (element){
    const elementValue = document.getElementById(element) ;
    const values = elementValue.innerText;
    const value = parseInt(values);
    return value;
}
function setInnerText (element, value){
    const text = document.getElementById(element);
    text.innerText= parseInt(value);
}
function disableButton (element){
    const disables = document.getElementById(element);
    disables.disabled = true;
    disables.classList.add('bg-[#1DD100]');
}
function enableButton (element){
    const disables = document.getElementById(element);
    disables.disabled = false;
    disables.classList.remove('bg-[#1DD100]');
}
function enableButtonn (element){
    const disables = document.getElementById(element);
    disables.disabled = true;
}
function inputValueById (element){
    const inputValue = document.getElementById(element);
    console.log(inputValue)
}
function hiddenElementById (element){
    const elements = document.getElementById(element);
    elements.classList.add('hidden');
}
function removeElementById (element){
    const elements = document.getElementById(element);
    elements.classList.remove('hidden');
}