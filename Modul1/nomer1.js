// Ukuran tanah dalam meter persegi
let panjang = 20.5;
let lebar = 30;
let hargaPerMeter = 1500000;

let luasTanah = panjang * lebar;
let totalHarga = luasTanah * hargaPerMeter;

let ppn = totalHarga * 0.15;
let totalHargaSetelahPPN = totalHarga + ppn;

console.log("Luas Tanah: " + luasTanah + " m²");
console.log("Total Harga : Rp " + totalHargaSetelahPPN.toLocaleString());