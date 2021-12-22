function inputDollar() {
    const usd = 14650;
    let dollarInput = Number(document.getElementById("input").value);
    let hasil = dollarInput * usd;
    document.getElementById("result").value = hasil;
}