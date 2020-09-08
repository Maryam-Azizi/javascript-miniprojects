function repeatCharacter(character, n) {
    
    var out = "";
    for (var i = 0; i < n; i++) {
        out += character;
         }
        return out
}
function  obfuscate(s) {
    if(s.length<=4){
        return repeatCharacter('x',s.length);
    }else{
        return s.substring(0,s.length-4)+ repeatCharacter('x',4);
    }
}
function obfuscateClick() {
    var inputNumber = document.getElementById('input-number');
    var inputIsObfuscated = document.getElementById('input-is-obfuscated');
    inputIsObfuscated.value = obfuscate(inputNumber.value);
}
function addEvent() {
    document.getElementById('btn-obfuscate').addEventListener('click',obfuscateClick);
}
function init() {
   addEvent(); 
}
init();