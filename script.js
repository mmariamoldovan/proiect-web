if(document.getElementById('lista-servicii')){
    var servicii=[
        {
            nume:"Curatenie apartamente",
            descriere:"Curatenie completa pentru apartamente de orice dimensiune. Includem aspirare, stergere praf, curatare bucatarie si baie. "
        },{
            nume:"Curatenie birouri",
            descriere:"Servicii profesionale pentru spatii de birou si comerciale. Program flexibil, inclusiv seara si weekend."

        },
        {
            nume:"Curatenie dupa renovare",
            descriere:"Indepartam tot praful si resturile dupa lucrari. Spalam geamuri, curatare podele si suprafete."
        },
        {nume:"Spalare geamuri",
            descriere:"Geamuri curate si stralucitoare, interior si exterior. Folosim produse profesionale fara dungi."
        },
        {
            nume:"Curatenie generala",
            descriere:"Curatenie profunda pentru orice tip de spatiu. Ideal pentru primavara sau inainte de evenimente importante din viata ta."
        }

    ];
    var container=document.getElementById('lista-servicii');
    for(var i=0;i<servicii.length;i++){
        var divServiciu=document.createElement('div');
        divServiciu.className='serviciu-item';
        divServiciu.innerHTML='<h4>'+servicii[i].nume+'</h4>'+'<p>'+servicii[i].descriere+'</p>';
        container.appendChild(divServiciu);
    }
}
function calculeazaPret(){
    var pretInitial=document.getElementById('pret-initial').value;
    pretInitial=Number(pretInitial);
    document.getElementById('rezultat').innerHTML='<p>Calculez...</p>';
    setTimeout(function(){
    if(pretInitial<=0 || isNaN(pretInitial)){
        document.getElementById('rezultat').innerHTML='<p style="color: red; background-color:#ffdddd; "> Te rog introdu un pret mai mare ca 0!</p>';
        return;
    }
    var reducere=pretInitial*0.10;
    var pretFinal=pretInitial-reducere;
    var mesaj='<p><strong>Calcul finalizat:</strong></p>';
    mesaj=mesaj+'<p>Pret initial:<strong>'+pretInitial+'RON</strong></p>';
    mesaj=mesaj+'<p> Reducere 10%: <strong style="color: #e74c3c;">-'+reducere+'RON</strong></p>';
    mesaj=mesaj+'<p style="font-size:22px;color:#27ae60;"><strong>Pret final: ' + pretFinal+ 'RON</strong></p>';
document.getElementById('rezultat').innerHTML=mesaj;},300)}

function trimiteFormular(){
    var nume=document.getElementById('nume').value;
    var email=document.getElementById('email').value;
    var mesaj=document.getElementById('mesaj').value;

    if(nume==='' || email === '' || mesaj ===''){
        alert('Te rog completeaza toate campurile!');
        return;
    }
    if(email.indexOf('@') ===-1){
        alert('Te rog introdu o adresa de email valida!');
        return;
    }
    alert('Multumim' + nume+ '\n\n Mesajul tau a fost trimis cu succes. \n Iti vom raspunde in curand la adresa'+ email);
    document.getElementById('nume').value='';
    document.getElementById('email').value='';
    document.getElementById('mesaj').value='';


}
window.onscroll=function(){
    var btn=this.document.getElementById('backToTop');
    if(btn&&(this.document.body.scrollTop>200||this.document.documentElement.scrollTop>200)){
        btn.style.display='blcok';

    }else if(btn){
        btn.style.display='none';
    }
};
function scrollToTop(){
    window.scrollTo({top:0,behavior:'smooth'})
}