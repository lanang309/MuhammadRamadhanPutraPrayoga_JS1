/*Muhammad Ramadhan Putra Prayoga_A_WEB_Morning*/

//IF,ELSE,Nested If
let nilai = 75;

if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else if (nilai >= 70) {
  console.log("Nilai Anda C");
  console.log();
} else {
  console.log("Nilai Anda D");
}

// Nested if
if (nilai >= 60) {
  console.log("Anda lolos.");
  console.log();
} else {
  console.log("Anda gagal.");
}
//Tutup IF,ELSE,Nested If

//Switch Case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    console.log();
    break;
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari ini adalah hari kerja.");
    console.log();
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari ini adalah hari libur.");
    break;
  default:
    console.log("Input tidak valid.");
}

//Tutup Switch Case

//For Statement
for (let i = 1; i <= 8; i++) {
  console.log(i);
}
console.log();

//Tutup For Statement

//While, do While
//While
let angka = 1;

while (angka <= 5) {
  console.log(angka);
  angka++;
}
console.log();

//do while
let counter = 1;

do {
  console.log(counter);
  counter++;
} while (counter <= 5);
console.log();

//Tutup While, Do while

//Function
function tambah(angka1, angka2) {
  return angka1 + angka2;
}

let hasil = tambah(10, 5);
console.log("Hasil penjumlahan: " + hasil);
console.log();

//Tutup function
