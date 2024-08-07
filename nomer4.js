let sukuPertama = 4
let rasio = 3
let jumlahSuku = 10
let jumlahTotal = 0

for (let i = 0; i < jumlahSuku; i++) {
    let sukuSaatIni = sukuPertama * Math.pow(rasio, i)
    jumlahTotal += sukuSaatIni
}

console.log("Jumlah 10 suku pertama dari deret geomatri adalah: " + jumlahTotal);