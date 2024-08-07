let tinggiBadan = 170; // cm
let beratBadan = 90; // kg


let tinggiBadanMeter = tinggiBadan / 100;

let bmi = beratBadan / (tinggiBadanMeter ** 2);

let statusBeratBadan;
if (bmi < 18.5) {
    statusBeratBadan = "Kekurangan berat badan";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBeratBadan = "Normal (ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    statusBeratBadan = "Kelebihan berat badan";
} else {
    statusBeratBadan = "Kegemukan (Obesitas)";
}

console.log("Tinggi Badan: " + tinggiBadan + " cm");
console.log("Berat Badan: " + beratBadan + " kg");
console.log("BMI: " + bmi.toFixed(2));
console.log("Status Berat Badan: " + statusBeratBadan);