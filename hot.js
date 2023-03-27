const readline = require("readline");

const menu = [
  {
    type: "Superior",
    "1-2 hari": 100000,
    "3-4 hari": 90000,
    ">=5 hari": 80000,
  },
  {
    type: "Deluxe",
    "1-2 hari": 150000,
    "3-4 hari": 135000,
    ">=5 hari": 120000,
  },
  {
    type: "Premium",
    "1-2 hari": 200000,
    "3-4 hari": 180000,
    ">=5 hari": 160000,
  },
];
const tipeKamarMapping = {
  1: "Superior",
  2: "Deluxe",
  3: "Premium",
};

console.table(menu);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalHarga = 0;

function isTipeKamarValid(tipeKamar) {
  return tipeKamar >= 1 && tipeKamar <= 3;
}

function getHargaMalam(tipeKamar, lamaMenginap) {
  const hargaTipeKamar = menu[tipeKamar - 1];
  const hargaMalam = hargaTipeKamar[
    lamaMenginap <= 2
      ? "1-2 hari"
      : lamaMenginap >= 5
      ? ">=5 hari"
      : "3-4 hari"
  ];
  return hargaMalam;
}

function tanyaKamar() {
  rl.question("Masukkan tipe kamar (input dalam bentuk angka) : ", (tipeKamar) => {
    if (!isTipeKamarValid(tipeKamar)) {
      console.log("Input tidak valid!");
      console.log("--------------");
      tanyaKamar();
      return;
    }

    rl.question("Masukkan lama menginap (dalam hari) : ", (lamaMenginap) => {
      const convert = tipeKamarMapping[tipeKamar];
      const hargaMalam = getHargaMalam(tipeKamar, lamaMenginap);
      const subTotalHarga = hargaMalam * lamaMenginap;
      totalHarga += subTotalHarga;

      console.log(`Tipe Kamar: ${convert}`);
      console.log(`Lama Menginap: ${lamaMenginap} hari`);
      console.log(`Subtotal Harga: Rp ${subTotalHarga}`);

      tanyaLanjut();
    });
  });
}

function tanyaLanjut() {
  rl.question("Ingin melanjutkan transaksi? (y/n) ", (jawaban) => {
    if (jawaban === "y") {
      console.log("--------------");
      tanyaKamar();
    } else if (jawaban === "n") {
      console.log("--------------");
      console.log(`Total Harga: Rp ${totalHarga}`);
      console.log("Terima kasih telah menggunakan layanan kami!");
      rl.close();
    } else {
      console.log("Pilihan tidak valid!");
      rl.close();
    }
  });
}

tanyaKamar()