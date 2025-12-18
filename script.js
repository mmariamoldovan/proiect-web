
var servicii = [
    {
        nume:"Curatenie apartamente",
        descriere:"Curatenie completa pentru apartamente de orice dimensiune..."
    },
    {
        nume:"Curatenie birouri",
        descriere:"Servicii profesionale pentru spatii de birou..."
    },
    {
        nume:"Curatenie dupa renovare",
        descriere:"Indepartam tot praful si resturile dupa lucrari..."
    },
    {
        nume:"Spalare geamuri",
        descriere:"Geamuri curate si stralucitoare..."
    },
    {
        nume:"Curatenie generala",
        descriere:"Curatenie profunda pentru orice tip de spatiu..."
    }
];

function afiseazaServicii(lista){
    var container=document.getElementById('lista-servicii');
    if(!container)return;
    container.innerHTML='';
    for(var i=0;i<lista.length;++i){
        var div=document.createElement('div');
        div.className='serviciu-item';
        div.innerHTML='<h4>'+lista[i].nume+'</h4>'+'<p>'+lista[i].descriere+'</p>';
        container.appendChild(div);
    }

}
if(document.getElementById('lista-servicii')){
 
    afiseazaServicii(servicii);
}

var inputFiltru=document.getElementById('filtru-servicii');
if(inputFiltru){
    inputFiltru.addEventListener('input',function(){
        var text=this.value.toLowerCase();
        var serviciiFiltrate=servicii.filter(function(serviciu){
            return serviciu.nume.toLowerCase().includes(text);
        });
        afiseazaServicii(serviciiFiltrate);
    });
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