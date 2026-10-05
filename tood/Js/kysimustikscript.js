function nimiLugemineKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");

    vastus1.innerHTML = "Sinu sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "lightgreen";

    return nimi.value;
}


// RADIO - kuidas muusikat kuulad
function radioValik() {
    let vastus2 = document.getElementById("vastus2");
    let spotify = document.getElementById("spotify");
    let raadio = document.getElementById("raadio");
    let vinyl = document.getElementById("vinüüplaat");
    let pilt = document.getElementById("pilt");

    let valik = "";

    if (spotify.checked) {
        valik = spotify.value;
        if (pilt) {
            pilt.src = "../images/spotify.jpg";
        }
    }
    else if (raadio.checked) {
        valik = raadio.value;
        if (pilt) {
            pilt.src = "../images/radio.jpg";
        }
    }
    else if (vinyl.checked) {
        valik = vinyl.value;
        if (pilt) {
            pilt.src = "../images/vinyyl.jpg";
        }
    }
    else {
        valik = "Palun tee oma valik";
    }

    vastus2.innerHTML = "Valik: " + valik;
    vastus2.style.backgroundColor = "lightgreen";

    return valik;
}


// CHECKBOX
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");

    let systemofdown = document.getElementById("systemofdown");
    let metallica = document.getElementById("metallica");
    let rollingstones = document.getElementById("rollingstones");

    let valik2 = "";

    if (systemofdown.checked) {
        valik2 += systemofdown.value + ", ";
    }

    if (metallica.checked) {
        valik2 += metallica.value + ", ";
    }

    if (rollingstones.checked) {
        valik2 += rollingstones.value + ", ";
    }

    if (valik2 === "") {
        valik2 = "Palun tee oma valik";
    }

    vastus3.innerHTML = "Sinu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "lightgreen";

    return valik2;
}


// PUHASTA
function puhasta() {
    document.getElementById("vastus1").innerHTML = "";
    document.getElementById("vastus2").innerHTML = "";
    document.getElementById("vastus3").innerHTML = "";
    document.getElementById("vastus4").innerHTML = "";
    document.getElementById("vastus5").innerHTML = "";
    document.getElementById("vastus6").innerHTML = "";
    document.getElementById("vastus7").innerHTML = "";
    document.getElementById("vastus8").innerHTML = "";
    document.getElementById("vastusKoik").innerHTML = "";
}


// RANGE
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let tund = document.getElementById("tund");

    vastus4.innerHTML = "Sa kuulad muusikat: " + tund.value + " tundi";

    return tund.value;
}


// SELECT
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");

    if (stiil.selectedIndex !== 0) {
        vastus5.innerHTML = "Sa valisid " + stiil.value;
    }
    else {
        vastus5.innerHTML = "Palun tee oma valik";
    }

    return stiil.value;
}


// TEXTAREA
function textAreaArvamus() {
    let vastus6 = document.getElementById("vastus6");
    let arvamus = document.getElementById("arvamus");

    vastus6.innerHTML = "Sinu arvamus: " + arvamus.value;

    return arvamus.value;
}


// RADIO - JAH / EI
function radioValik2() {
    let vastus7 = document.getElementById("vastus7");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");

    let valik3 = "";

    if (jah.checked) {
        valik3 = jah.value;
    }
    else if (ei.checked) {
        valik3 = ei.value;
    }
    else {
        valik3 = "Palun tee oma valik";
    }

    vastus7.innerHTML = "Kas kuulad raadiot: " + valik3;
    vastus7.style.backgroundColor = "lightgreen";

    return valik3;
}


// RADIOJAAM
function radiojaamValik() {
    let vastus8 = document.getElementById("vastus8");
    let radiojaam = document.getElementById("radiojaam");

    vastus8.innerHTML = "Raadiojaam: " + radiojaam.value;

    return radiojaam.value;
}


// KÕIK VASTUSED
function naitaKoike() {
    let vastusKoik = document.getElementById("vastusKoik");

    let nimi = nimiLugemineKastist();
    let valik = radioValik();
    let valik2 = checkboxValik();
    let tund = rangeValik();
    let stiil = selectValik();
    let arvamus = textAreaArvamus();
    let valik3 = radioValik2();
    let radiojaam = radiojaamValik();

    vastusKoik.innerHTML =
        "Sinu nimi on: " + nimi + "<br>" +
        "Sinu lemmikud on: " + valik2 + "<br>" +
        "Sa kasutad: " + valik + "<br>" +
        "Sa kuulad: " + tund + " tundi<br>" +
        "Sa valisid: " + stiil + "<br>" +
        "Sinu arvamus: " + arvamus + "<br>" +
        "Kas kuulad raadiot? " + valik3 + "<br>" +
        "Raadiojaam: " + radiojaam;
}