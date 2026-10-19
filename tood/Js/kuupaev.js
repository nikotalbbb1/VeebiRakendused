const now=new Date();

const paev=now.getDate();  //tagastab päeva

console.log("Tänane päev : " +paev+ "päev");

const kuu=now.getMonth()+1; //tagastab kuu 0-11
console.log("Kuu number on "+kuu);

const aasta=now.getFullYear();
console.log("Aasta on: "+aasta);

const nadalapaev=now.getDay(); //0-6, kus on 0-pühapäev
console.log("Nadalapaeva number : " +nadalapaev);

const tund=now.getHours();
console.log("Tund: "+tund);

const minut=now.getMinutes();
console.log("Minut: "+minut);

function tana(){
    let vastus=document.getElementById("vastus");
    vastus.innerHTML= "Täna on "+paev+"."+kuu+"."+aasta;
}

function kell(){
    let vastus2=document.getElementById("vastus2");
    vastus2.innerHTML="Praegu on : "+tund+":"+minut;
}
function konstpaev() {
    let vastus3 = document.getElementById("vastus3");
    const now = new Date();
    const konsultatsioon = new Date(2026, 10, 2);

    const vaheMs = konsultatsioon - now;
    const paevadeArv = Math.ceil(vaheMs / (1000 * 60 * 60 * 24));

    vastus3.innerHTML = "Konsultatsiooni päevani: " + paevadeArv;
}
function synnipaevani() {
    let vastus4 = document.getElementById("vastus4");
    const now = new Date();

    let mai = new Date(now.getFullYear(), 4, 17);

    if (now > mai) {
        mai.setFullYear(now.getFullYear() + 1);
    }

    const vaheMs = mai - now;
    const paevad = Math.ceil(vaheMs / (1000 * 60 * 60 * 24));

    vastus4.innerHTML = "Sünnipäevani " + paevad + " päeva.";
}