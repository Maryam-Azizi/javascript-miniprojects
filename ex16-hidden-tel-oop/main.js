function VisitCard(id,title,description,tel) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tel = tel;
    this.getHTML  = getHTML;
    function getHTML() {
        var out = '<div class="new-card" id="'+this.id+'"><h2>'+ this.title+'</h2>'+
            '<p>'+ this.description +'</p>'+
            '<label>Tel</label><span class="tel" hidden-tel="'+
            this.tel +'">XXXXXXXX</span></div>';
            return out;
    }
    this.showTel = function () {
        var elm = document.getElementById(this.id);
        var span = elm.querySelector('span.tel');
        var tel = span.getAttribute('hidden-tel');
        span.innerHTML = tel;
    }
}
function init() {
    window.visitCards = [];
    visitCards.push(new VisitCard('card1','Dublex Apartment','200m  4 beds',123456789));
    visitCards.push(new VisitCard('card2','Shop store', '45meter',987654321));
    updateUI();
    setupEvents();
}
function updateUI() {
    var out="";
    for (var i = 0; i < window.visitCards.length; i++) {
         out += window.visitCards[i].getHTML();
        
    }
    document.querySelector('.cards').innerHTML = out;
}
function setupEvents() {
    for (var i = 0; i  < visitCards.length; i++) {
        var id = window.visitCards[i].id;
        console.log('id:'+id);
        var elm = document.querySelector('#'+id);
        elm.querySelector('span.tel').addEventListener('click', window.visitCards[i].showTel.bind(visitCards[i]));
    }
}
init();