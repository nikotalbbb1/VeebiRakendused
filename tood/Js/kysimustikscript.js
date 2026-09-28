function nimiLugemineKastist(){
    let vastus1=document.getElementById("vastus1");
    let nimi=document.getElementById("nimi");
    vastus1.innerHTML="Sinu sisestatud nimi on: "+nimi.value;
    vastus1.style.backgroundColor="lightgreen";

    return nimi.value;
}
//radio valikud
function radioValik(){
    let vastus2=document.getElementById("vastus2");
    let spotify=document.getElementById("spotify");
    let raadio=document.getElementById("raadio");
    let vinyl=document.getElementById("vinüüplaat");
    let valik="";
    if(spotify.checked){
        valik=spotify.value;
    }
    else if(raadio.value){
        valik=raadio.value;
    }
    else if(vinyl.value){
        valik=vinyl.value;
    }
    else {
        valik="Palun tee oma valik";
    }
    //vastus
    vastus2.innerHTML="Valik: "+valik;
    vastus2.style.backgroundColor="lightgreen";

    return valik;
}
//checkbox
function checkboxValik(){
    let vastus3=document.getElementById("vastus3");
    let systemofdown=document.getElementById("systemofdown");
    let metallica=document.getElementById("metallica");
    let rollingstones=document.getElementById("rollingstones");

    let valik2="";
    if(systemofdown.checked){
        valik2+=systemofdown.value + ', ';
    }
    if(metallica.checked){
        valik2+=metallica.value + ', ';
    }
    if(rollingstones.checked){
        valik2+=rollingstones.value + ', ';
    }
    if(valik2==""){
        valik2="Palun tee oma valik";
    }
    vastus3.innerHTML="Sinu lemmikud on : "+ valik2;
    vastus3.style.backgroundColor="lightgreen";

    return valik2;
}
//kasutab teisi funktsioone
function naitaKoike(){
    let vastusKoik=document.getElementById("vastusKoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();
    let stiil=selectValik();
    vastusKoik.innerHTML="Sinu nimi on: "+nimi+'<br>'+'Sinu lemmikud on : '+valik2+'<br>'+'Sa kasutad ' + valik +'' +
        '<br>'+'Sa kuuled ' + tund + ' tundi'+
        'Sa valisid '+stiil;
}
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastusKoik.innerHTML="";
}
//range
function rangeValik(){
    let vastus4=document.getElementById("vastus4");
    let tunda=document.getElementById("tund");
    vastus4.innerHTML="Sa kuuled muusikat : " + tund.value + "tundi";
    return tund.value;
}
//select
function selectValik(){
    let vastus5=document.getElementById("vastus5");
    let stiil=document.getElementById("stiil");

    if(stiil.selectedIndex!==0){
        vastus5.innerHTML="Sa valisid " +stiil.value;
    }
    else{
        vastus5.innerHTML="Palun tee oma valik";
    }
    return stiil.value;
}