function vanuseKalkulaator() {
    let aasta = document.getElementById("aasta");
    let vastus3 = document.getElementById("vastus3");

    if (aasta.value === "") {
        vastus3.innerHTML = "Palun sisesta sünniaasta!";
        return;
    }

    let vanus = new Date().getFullYear() - Number(aasta.value);

    if (aasta.value < 1900 || aasta.value > new Date().getFullYear()) {
        vastus3.innerHTML = "Palun sisesta õige sünniaasta!";
    } else {
        vastus3.innerHTML = "Sinu vanus on: " + vanus + " aastat.";
    }
}