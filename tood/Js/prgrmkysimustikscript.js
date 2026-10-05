//Milliseid programmeerimiskeeli sa tead?
function checkboxValik() {
    let vastus = document.getElementById("vastus");
    let javascript = document.getElementById("javascript");
    let python = document.getElementById("python");
    let java = document.getElementById("java");
    let Cshrp = document.getElementById("csharp");
    let php = document.getElementById("php");

    let valik = "";

    if (javascript.checked) {
        valik += javascript.value + ", ";
    }

    if (python.checked) {
        valik += python.value + ", ";
    }

    if (java.checked) {
        valik += java.value + ", ";
    }
    if (Cshrp.checked) {
        valik += Cshrp.value + ", ";
    }
    if (php.checked) {
        valik += php.value + ", ";
    }

    if (valik === "") {
        valik = "Palun tee oma valik";
    }

    vastus.innerHTML = "Sa tead: " + valik;
    vastus.style.backgroundColor = "lightgreen";

    return valik;
}
//Mida arvad programmeerimise õppimisest?
function textAreaArvamus() {
    let vastus1 = document.getElementById("vastus1");
    let teadmised = document.getElementById("teadmised");

    vastus1.innerHTML = "Sinu arvamus: " + teadmised.value;

    return teadmised.value;
}
//Mitu tundi nädalas tegeled programmeerimisega?
function rangeValik() {
    let vastus2 = document.getElementById("vastus2");
    let tund = document.getElementById("tund");

    vastus2.innerHTML = "Sa tegeled programmeerimisega: " + tund.value + " tundi";

    return tund.value;
}
//Milliseid programmeerimisega seotud tööriistu oskad nimetada?
function nimetusLugemineKastist() {
    let vastus3 = document.getElementById("vastus3");
    let nimetus = document.getElementById("nimetus");

    vastus3.innerHTML = "Sinu nimetatud tööriistad:  " + nimetus.value;
    vastus3.style.backgroundColor = "lightgreen";

    return nimetus.value;
}
//Kas sulle meeldib programmeerida?
function radioValik() {
    let vastus4 = document.getElementById("vastus4");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let valik2 = "";

    if (jah.checked) {
        valik2 = "Programmeerimine meeldib!😊";
    } else if (ei.checked) {
        valik2 = "Programmeerimine ei meeldi.😢";
    } else {
        valik2 = "Palun tee oma valik";
    }

    vastus4.innerHTML = "Kas sulle meeldib programmeerida? " + valik2;
    vastus4.style.backgroundColor = "lightgreen";

    return valik2;
}
//Millist programmeerimiskeelt sooviksid kõige rohkem õppida?
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let soovid = document.getElementById("soovid");

    if (soovid.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid " + soovid.value;
    }
    else {
        vastus5.innerHTML = "Palun tee oma valik";
    }

    return soovid.value;
}


    function naitaKoike() {
        let vastusKoik = document.getElementById("vastusKoik");
        let vastus = checkboxValik();
        let teadmised = textAreaArvamus();
        let tund = rangeValik();
        let nimetus = nimetusLugemineKastist();
        let valik2 = radioValik();
        let soovid = selectValik();
        vastusKoik.innerHTML =
            "Sinu valitud programmeerimiskeeled: " + vastus + "<br>" +
            "Sinu arvamus: " + teadmised + "<br>" +
            "Tegeled programmeerimisega: " + tund + "  tundi nädalas.<br>" +
            "Sinu nimetatud tööriistad:  " + nimetus + "<br>" +
            "Kas sulle meeldib programmeerida? " + valik2 + "<br>" +
            "Sinu valik: " + soovid + "<br>";
    }

function puhasta() {
    document.getElementById("vastus").innerHTML = "";
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";
}



