// Ternary conditional Operators (üç değişkenli koşul operatörleri)

// koşul ? doğruysa : yanlışsa;    //  Tek bir ifadeyse

// if(koşul){
//     doğruysa
// } else {
//     yanlışsa
// }

// const koprununDurumu = "acik";

// koprununDurumu === "acik"
//     ? console.log("Kopru acik")
//     : console.log("Kopru kapali");

// const koprununDurumu = "tadilat var";

// koprununDurumu === "acik"
//     ? console.log("Kopru acik")
//     : koprununDurumu === "kapali"
//     ? console.log("Kopru kapali")
//     // : console.log("Koprunun durumu bilinmiyor");
//     : console.log(koprununDurumu);

// const deger = 1;
// const deger = 0;
// const deger = -1;
// const deger = null;
// const deger = NaN;
// const deger = 0 / 0;
// const deger = "";
// const deger = undefined;
// const deger = 1 / 0;
// const deger = [];
// const deger = [1, 2, 3];
// const deger = {};
const deger = { isim: "Mehmet"};

// deger ? console.log("değer geçerli") : console.log("değer geçersiz");
// deger.length ? console.log("değer geçerli") : console.log("değer geçersiz");
Object.keys(deger).length ? console.log("değer geçerli") : console.log("değer geçersiz");