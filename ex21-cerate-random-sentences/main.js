const sentencesElm = document.getElementById('sentences');
const articleArr = ['the ','a ','the ','some ','any '];
const nounArr = ['car ','town ','dog ','girl ','boy '];
const verbArr = ['skipped ','walked ','ran ','jumed ','drove '];
const prepositionArr = ['on ','under ','over ','from ','to '];

let sentences = [];

function randomNumber(){
    num = Math.floor(Math.random()*5);
    return num
}
function wordSelected(){
    for (var i =0; i<20; i++){
        let articleWord1 = capitalize(articleArr[randomNumber()]);
        let articleWord2 = articleArr[randomNumber()];
        let nounWord1 = nounArr[randomNumber()];
        let nounWord2 = nounArr[randomNumber()];
        let verbWord = verbArr[randomNumber()];
        let prepositionWord = prepositionArr[randomNumber()];
    
        let sentenceIsMade = articleWord1+nounWord1+verbWord+prepositionWord+articleWord2+nounWord2+'.';
        sentences.push(sentenceIsMade);   
    }

    UpdateUI()
}
function capitalize(string) {
    var x = string[0].toUpperCase() + string.substring(1);
    return x;
}
function UpdateUI(){
    sentences.forEach(element => {
        sentencesElm.innerHTML += 
        `
        <p> ${element}</p>
    `
    });
}
wordSelected();