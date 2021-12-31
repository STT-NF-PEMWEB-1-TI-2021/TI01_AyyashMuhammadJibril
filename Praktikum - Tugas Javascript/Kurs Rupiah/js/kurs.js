function convert(){
    const usDollar = 9915;
    const sgDollar = 13472;
    const myRinggit = 874;
    const jpYen = 120;
    const euEuro = 15888;
    const uaeRiyal = 3592;

if (valas.value == "usd") {
    let input = Number(document.getElementById("input").value);
    let result = input * usDollar;
    document.getElementById("result").value = result; 
}
else if (valas.value == "sgd") {
    let input = Number(document.getElementById("input").value);
    let result = input * sgDollar;
    document.getElementById("result").value = result;
}
else if (valas.value == "myr") {
    let input = Number(document.getElementById("input").value);
    let result = input * myRinggit;
    document.getElementById("result").value = result;
}
else if (valas.value == "jpy") {
    let input = Number(document.getElementById("input").value);
    let result = input * jpYen;
    document.getElementById("result").value = result;
}
else if (valas.value == "euro") {
    let input = Number(document.getElementById("input").value);
    let result = input * euEuro;
    document.getElementById("result").value = result;
}
else {
    let input = Number(document.getElementById("input").value);
    let result = input * uaeRiyal;
    document.getElementById("result").value = result;
}
}