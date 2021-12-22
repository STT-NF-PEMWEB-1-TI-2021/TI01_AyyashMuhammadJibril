function hitungParkir() {
    let waktuMasuk = document.getElementById("masuk").value;
    let waktuKeluar = document.getElementById("keluar").value;
    let durasi = waktuKeluar - waktuMasuk;
    let biaya = 0;
    const tarifAwal = 3000;
    const tarifPerjam = 1000;
    if (durasi <= 2) {
        biaya = tarifAwal;
    } else {
        biaya = tarifAwal + tarifPerjam * (durasi - 2);
    }
    let areaBiaya = document.getElementById("biayaParkir");
    areaBiaya.innerHTML = biaya;
}