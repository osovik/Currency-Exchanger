function exchane() {
    let num = document.getElementById('input1').value;
    let currency = document.getElementById('select2').value;
    let result;
    let usd = 29.25;
    let eur = 30.4;
    let uah = 1;
    if (currency === "USD") {
        result = tousd();
    } else if (currency === "EUR") {
        result = toeur();

    } else if (currency === "UAH") {
        result = touah();
    }

    function tousd() {
        return num * usd;
    }

    function toeur() {
        return num * eur;
    }

    function touah() {
        return num * uah;
    }

    document.getElementById('res').innerHTML = result;
}
