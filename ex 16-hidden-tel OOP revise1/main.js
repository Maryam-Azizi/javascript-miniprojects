function VisitCard(title,description,tel,element) {
    this.title = title;
    this.description = description;
    this.tel = tel;
    this.element= element;
    this.showTel = showTel;
    this.updateUI = updateUI;
    this.setupEvent = setupEvent;
    function showTel() {
        var span = this.element.querySelector('span.tel');
        var tel = span.getAttribute('hiddenTel');
        span.innerHTML = tel;
    }
    function updateUI() {
        var output ='<h3>'+this.title+
        '</h3><p>'+this.description +
        '</p><label>Tel: </label><span class="tel" hiddenTel="'+this.tel+
        '">XXXXXXXXXX</span></div>';
        this.element.innerHTML = output;
    }
    function setupEvent() {
       this.element.querySelector('span.tel').addEventListener('click',this.showTel.bind(this));
    }
    this.updateUI();
     this.setupEvent();
}
function init(){
    var elm1 =document.getElementById('card1');
    var card1 = new VisitCard('Shop store','45metr in center city',' 0987654321',elm1);
     var elm2 =document.getElementById('card2');
    var card2 = new VisitCard('Shop store','45metr in center city',' 0987654321',elm2);
}
init();
