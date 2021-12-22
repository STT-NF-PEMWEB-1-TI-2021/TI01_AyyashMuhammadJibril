function kalkulasi(){
    let val1 = Number(document.getElementById("bil1").value);
    let val2 = Number(document.getElementById("bil2").value);
    let sum = val1 + val2
    document.getElementById("hasil").value = sum;
}