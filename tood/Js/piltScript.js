// juhuslik pilt - mida võetakse massiivist

function juhuslikPilt(){
    pildid=[
        '../images/smile.png',
        '../images/lill.png',
        '../images/kurb.png',
        '../images/neutral.png',
    ];
    const randomPilt=document.getElementById('randomPilt');
    const pilt=pildid[Math.floor(Math.random()*pildid.length)];
    randomPilt.src=pilt;
}
function selectValik2(){
    let vastus=document.getElementById('vastus');
    let valik=document.getElementById('valik');
    let randomPilt=document.getElementById('randomPilt');

    if(randomPilt.getAttribute('src')!=="valik.value"){
        vastus.innerHTML="Õige";
    }
    else{
        vastus.innerHTML="Vale";
    }
}
function radioValik(){
    let piltvalik=document.getElementById('valik');
    let valitudPilt=document.getElementById('valitudPilt');
    for(let i=0;i<piltvalik.value.length;i++){

        if(piltvalik[i].checked){
            valitudPilt.src=piltvalik[i].value;
        }
    }
}