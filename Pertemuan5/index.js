//Deklarasi Array
// let angka =[1,2,3,4,5,6,7,8];
// console.log(angka);
// let buah=['mangga','apple','jeruk'];
//  console.log(buah);

//  let arr =['text',1,true];
//  console.log(arr);

//  let myFunc = function (){
//      return "hello array";
//  };

//  let arr2 = ["text",1,true,myFunc(),[1,2,3,4,5]];
//  //mengakses element dalam array
//  console.log(arr2[2]);
//  console.log(arr2[3]);
//  console.log(arr2[4][2]);

//  console.log(typeof arr2);
//  console.log(arr2.length);


//Deklarasi Array menggunakan kata kunci new //

// let buah2 = new Array("salak",'jambu','melon');
// console.log(buah2);


//manipulasi Array
//1. menambah isi array

// let mhs =[];
// mhs[0] ="jhon";
// mhs[1] = "bob";
// mhs [2] = "jane";
// mhs [3] = 'peter';

// console.log(mhs);

// //2. Mengubah Isi Array
// mhs[1] ='donny';
// console.log(mhs);

// //3.menghapus isi array
// mhs[2] = undefined;
// console.log(mhs);

//4. menampilkan isi Array
// let mhs = ['jhon','bob', 'jane', 'peter'];

// for (let i=0; i<4; i++){
//     console.log("mahasiswa ke-"+ i +" adalah "+ mhs[i])
// };


//Method dalam Array
//1.lenght
//2. toString

// let mhs = ["jhon","bob","jane","peter"];
// console.log(mhs.toString());
// //3.join
// console.log(mhs.join(" - "));

//4.push menambahkan terakhir,pop mengeluarkan terakhir, unshift menambahkan awal, shift menghapus awal
// mhs.push("mayyra");
// mhs.push("stenly");
// console.log(mhs.join(" - "));
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));

// mhs.unshift("stenly");
// mhs.unshift("mayyra");
// console.log(mhs.join(" - "));
// mhs.shift();
// mhs.shift();
// console.log(mhs.join(" - "));

// 5.concat
// let buah =['mangga','apel','anggur'];
// let sayur =["kol","bayam","buncis"];

// let makanan = sayur.concat(buah);
// console.log(makanan);

//6.splice dan slice
//a.splice
// let buah =['pisang','mangga','apel','jeruk'];
// buah.splice(2, 1//ygmau di hapus
//     , 'melon','semangka');
// console.log(buah.join(" - "));

// //b.slice
// let buah2 = buah.slice(0,3);
// console.log(buah2.join(" - "));


//7.forEach dan map
// a.for each

// let mhs = ['jhon','bob', 'jane', 'peter'];

// for (let i=0; i<4; i++){
//     console.log("mahasiswa ke-"+ i +" adalah "+ mhs[i])
// };


// let angka = [1,2,3,4,5,6,7,8];

// // let tampilAngka =function (el){}
// // angka.forEach(function(el){
// //     console.log(el);
// // });

// let tampilAngka = function (el){
//     console.log(el);
// };

// //angka forEach (tampil angka)

// //b.map
// let angka2 = angka.map(function (el){
//     return el;
// });
// console.log(angka2);

// //8.sort untuk mengurutkan mendeteksi karakter paling awal
// let angka =[1,100,2,20,5,3,7,8];


// angka.sort(function(a,b){
//     return b-a;
// });
// console.log(angka);

// //9. filter

let angka =[1,100,2,20,5,3,7,8];
let angka2 =angka.filter(function (el){
    return el>5;
});
console.log(angka2);