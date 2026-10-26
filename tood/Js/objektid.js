let raamat = {
    pealkiri: "Näljamängud",
    autor: "Suzanne Collins",
    aasta: 2008,
    //meetod, mis kuvab raamatu kirjelduse.
    taiskirjeldus: function() {
        return "Pealkiri: " +this.pealkiri + ", " + "Autor: " + this.autor + ", " +"Aasta: " +this.aasta;
    },
    //meetod, mis muudab väljaandmise aastat ja prindi tulemused konsooli.
    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
    }
};
console.log(raamat.taiskirjeldus());

raamat.muudaAasta(1927);
console.log(raamat);
//objekt raamatukogu
let raamatukogu = {
    raamatud: [
        { pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008},
        { pealkiri: "Tüdruk rongis", autor: "Paula Hawkins", aasta: 2015},
        { pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003}
    ]
};
let raamatud = [
    { pealkiri: "Näljamängud", autor: "Suzanne Collins", aasta: 2008},
    { pealkiri: "Tüdruk rongis", autor: "Paula Hawkins", aasta: 2015},
    { pealkiri: "Da Vinci kood", autor: "Dan Brown", aasta: 2003}
];
let tulemus = "";
//meetod, mis kuvab kõik raamatud kenasti konsoolis
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

let vastus = document.getElementById("vastus");
vastus.innerHTML = tulemus;

// Meetod, mis lisab uue raamatu
function lisaRaamat(uusRaamat) {
    raamatud.push(uusRaamat);
}

lisaRaamat({
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912
});

console.log(raamatud);
//meetod, mis kuvab raamatukogu raamatute koguarvu.
function kogusRaamat() {
    console.log("Raamatude kogus on: "+raamatud.length);
}
kogusRaamat();


//meetod, mis arvutab, mitu raamatut on ilmunud pärast 2000. aastat.
function uueamadRaamatud(){
    let uuemad = raamatud.filter(raamat=> raamat.aasta > 2000);
    console.log("Pärast 2000. aastat ilmunud raamatud:");
    console.log(uuemad);
}
uueamadRaamatud();

//Minu funktsioon kuvab esimene raamatu pealkiri
function esimeneRaamatPealkiri(){
    console.log("Esimene raamat on: " + raamatud[0].pealkiri);
}
esimeneRaamatPealkiri();