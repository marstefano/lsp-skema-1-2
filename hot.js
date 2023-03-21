const data = [
    {sewa: '1/2 Hari', superior: '100000/Malam', deluxe: '150000/Malam', premium:'200000/Malam'},
    {sewa: '3/4 Hari', superior: '90000/Malam', deluxe: '135000/Malam', premium:'180000/Malam'},
    {sewa: '=>5 Hari', superior: '80000/Malam', deluxe: '120000/Malam', premium:'160000/Malam'}
];

console.table(data);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Tipe kamar: \n 1. superior\n 2. deluxe\n 3. premium\n Pilih tipe kamar: ",
(jenisKamar) => {
    rl.question("Masukkan lama menginap (dalam hari): ",(lamaMenginap) => {
        let hargaPerMalam = 0;
        if (jenisKamar ==="1"){
            hargaPerMalam = lamaMenginap <= 2 ? 100000 : lamaMenginap <= 4 ? 90000 : 80000;
        } else if (jenisKamar === "2") {
            hargaPerMalam = lamaMenginap <= 2 ? 150000 : lamaMenginap <= 4 ? 135000 : 120000;
        }else if (jenisKamar === "3") {
            hargaPerMalam = lamaMenginap <= 2 ? 200000 : lamaMenginap <= 4 ? 180000 : 160000;
    }

    const totalHarga = hargaPerMalam * lamaMenginap;

    console.log(`Harga kamar ${jenisKamar} selama ${lamaMenginap} hari adalah Rp.${totalHarga}`);
    rl.close();
});
});