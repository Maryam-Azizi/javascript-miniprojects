const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const title = document.getElementById('title');
const publication = document.getElementById('publication');
const year = document.getElementById('year');
const journal = document.getElementById('journal');
const volume = document.getElementById('volume');
const issue = document.getElementById('issue');
const submit = document.getElementById('submit');
const articleForm = document.getElementById('article-form');
const errorElm = document.getElementById('error');
const apaStyle = document.getElementById('apa-style')

let messages = [];
let errorMessagesElm = [];


articleForm.addEventListener('submit', formValidation);

function formValidation(e) {
    e.preventDefault();
    messages = [];
    let errorMessagesElm = [];
    [firstName, lastName, title, publication, year, journal, volume, issue].forEach(function (elm) {
        elm.classList.remove('border-danger');

    })
    if (firstName.value.trim() == '') {
        messages.push(addIsRequierd(' First name '));
        errorMessagesElm.push(firstName);
    }
    else if (/^[0-9]*$/.test(firstName.value)) {

        messages.push(addIncorrectNumber(' First name '));
    }
    if (lastName.value.trim() == '') {
        messages.push(addIsRequierd(' Last name '));
        errorMessagesElm.push(lastName);
    }
    else if (/^[0-9]*$/.test(lastName.value)) {

        messages.push(addIncorrectNumber(' Last name '));
    }
    if (title.value.trim() == '') {
        messages.push(addIsRequierd(' Titel '));
    }
 
    if (publication.value.trim() == '') {
        messages.push(addIsRequierd(' Publication '));
    }
    
    if (year.value.trim() == '') {
        messages.push(addIsRequierd(' Year '));
    }
    else if (year.value.length < 4) {

        messages.push(addIncorrectNumber(' Year '));
    }
    else if (/^[a-z A-Z]*$/.test(year.value)) {

        messages.push(addIncorrectNumber(' Year '));
    }
    if (journal.value.trim() == '') {
        messages.push(addIsRequierd(' Journal '));
    }
    if (volume.value.trim() == '') {
        messages.push(addIsRequierd('Volume '));
    }
    if (issue.value.trim() == '') {
        messages.push(addIsRequierd(' Issue '));
    }
    errorElm.innerHTML = '';
    messages.forEach(updateUIerrors);
    errorMessagesElm.forEach(addClassError);
    if (messages.length == 0) {
        cerateApaStyle();
    }

    function addIsRequierd(value) {
        var message = value + ('is requierd');
        return message;
    }
    function addIncorrectNumber(value) {
        var message = value + ('is invalid');
        return message;
    }
    function updateUIerrors(value) {
        errorElm.innerHTML += `
        <p> ${value}</p>`;
    }
    function addClassError(value) {
        var errorElm = value.classList.add('border-danger');
        return errorElm;
    }




    function cerateApaStyle() {
        apaStyle.innerHTML = `
        <p>
        ${capitalize(lastName.value)}, ${upperCaseFirstLetter(firstName.value)}, (${year.value}). ${capitalize(title.value)}. <em>${capitalize(journal.value)}<em>, ${volume.value}, ${issue.value}
        </p>
        `
    }

}
function capitalize(string) {
    var x = string[0].toUpperCase() + string.substring(1);
    return x;
}
function upperCaseFirstLetter(string) {
    var x = string[0].toUpperCase();
    return x;
}
