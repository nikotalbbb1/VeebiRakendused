let raamat = {
    pealkiri: "Näljamängud",
    autor: "Suzanne Collins",
    aasta: 2008,


//meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.
    taiskirjeldus: function () {
        return "Pealkiri: " +this.pealkiri +" | "+ " Autor: "+ this.autor +" | "+" Aasta: " + this.aasta;
    },

    muudaAasta: function (uusAasta) {
        this.aasta = uusAasta;
    }

};
function raamatuKirjeldus() {
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = raamat.taiskirjeldus();
}

function muudaAastat() {
    let vastus2 = document.getElementById("vastus2");
    const uusAasta = Number(document.getElementById("uusAasta").value);

    raamat.muudaAasta(uusAasta);

    console.log(raamat.taiskirjeldus());
    vastus2.innerHTML = "Aasta muudetud: " + raamat.taiskirjeldus();
}
//meetod, mis kuvab kõik raamatud kenasti konsoolis.
function kuvaRaamatud() {
    let tulemus = "";

    raamatud.forEach((raamat) => {
        tulemus += `
        <p>
            <b>Pealkiri:</b> ${raamat.pealkiri}<br>
            <b>Autor:</b> ${raamat.autor}<br>
            <b>Aasta:</b> ${raamat.aasta}
        </p>
        <hr>
        `;
    });

    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = tulemus;
}




let raamatud = [
    {pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008},
    {pealkiri: "Tüdruk rongis", autor: "Paula Hawkins", aasta: 2015},
    {pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003}
];
let raamatukogu = {
    raamatud: [
        {pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008},
        {pealkiri: "Tüdruk rongis", autor: "Paula Hawkins", aasta: 2015},
        {pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003}
    ]
};
//meetod, mis lisab uue raamatu.
function lisaRaamat() {
    const pealkiri = document.getElementById("pealkiri").value;
    const autor = document.getElementById("autor").value;
    const aasta = Number(document.getElementById("aasta").value);

    raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });

    let vastus4 = document.getElementById("vastus4");
    vastus4.innerHTML = "Raamat " + pealkiri + " lisatud.";
}

//meetod, mis kuvab raamatukogu raamatute koguarvu.
function raamatuteArv() {
    let vastus5 = document.getElementById("vastus5");
    vastus5.innerHTML = "Raamatuid kokku: " + raamatud.length;
}

//meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
function peale2000() {
    let vastus6 = document.getElementById("vastus6");
    let uuemad = raamatud.filter(r => r.aasta > 2000);
    vastus6.innerHTML = "Pärast 2000. aastat ilmunud raamatuid: " + uuemad.length;
}

// MINU OMA FUNKTSIOON: vanadRaamatud()
// Mida see tähendab: leiab kõik raamatud, mis on ilmunud peale 2000. aastat.
function vanadRaamatud() {
    let vastus7 = document.getElementById("vastus7");

    //Filtreerimine
    let filter = raamatud.filter(raamat => raamat.aasta > 2000);
    console.log(filter);

    let tulemus = "";

    filter.forEach((raamat) => {
        tulemus += raamat.pealkiri + " (" + raamat.aasta + ")<br>";
    });

    vastus7.innerHTML = "Raamatuid enne 2000. aastat: " + filter.length + "<br>" + tulemus;
}