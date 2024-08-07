//Variable 
let nama = "Krizzna" //string
let umur = 16   //integer
let single = true //bolean

//matematika
let Pi = 3.14 //double

console.log(nama);

class persegi {
    constructor(sisi) {
        this.sisi = sisi
    }

    luas = () =>{
        return this.sisi * this.sisi
    }
    keliling = () =>{
        return 4 * this.sisi
    }
}

let kotak = new persegi(5)
console.log("Luas : "+ kotak.luas());
console.log("Keliling : "+ kotak.keliling());
