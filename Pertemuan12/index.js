// Rest & Spread Operator

    // const hitung = (a, b, c) => {
    //     return a * b / c;
    // };
    // console.log(hitung(2, 3, 4));

// With Looping
    // const hitung = (a, b, c, d, e) => {
    //     const angkak = [a, b, c, d, e];
    //     let total = 0;
    //     for(let i = 0; i < 5; i++) {
    //         total = total * angka[i] + total / angka[i]
    //     }
    //     return total;
    // }


    // const hitung = (...angka) => {
    //     console.log(angka);
    //     let total = 0
    //     angka.forEach((el) => {
    //         total = total + el;
    //     });
    //     return total;
    // }
    // console.log(hitung(1, 2, 3, 4));


// Rest Operator
    // const hitung = (param1, param2, param3,...params) => {
    //     console.log(param1);
    //     console.log(param2);
    //     console.log(param3);
    //     console.log(params);

    //     let total = 0
    //     params.forEach((el) => {
    //         total = total + el;
    //     });
    //     return total;
    // }
    // console.log(hitung(1, 2, 3, 4, 5, 6, 7));

// Spread Operator

    // const angka = [1, 2, 3, 4, 5];
    // console.log(angka); // output: [1, 2, 3, 4, 5]  (angka[i] untuk menampilkan index array)
    // console.log(...angka); // output: 1, 2, 3 ,4 , 5

    // const angka2 = [...angka];
    // angka[0] = 10;
    // console.log(angka);
    // console.log(angka2);

// 2. Menggabungkan array

    // const angka1 = [1, 2, 3 ,4 , 5];
    // const angka2 = [6, 7, 8, 9, 10];
    // const angka3 = [12, 13];

    // const gabung5 = angka1.concat(angka2, angka3); //tidak bisa menambahkan angka
    // console.log(gabung5);

    // const gabung6 = [...angka1,...angka2, 11,...angka3]; // bisa menambahan angka
    // console.log(gabung6);

// Menambah properti
    // let orang = {
    //     nama: 'Mario',
    //     umur: 19,
    // };
    // orang = {...orang, pekerjaan: 'Mahasiswa', pendidikan: 'S1'};
    // console.log(orang);

// Menggabungkan object
    const objek1 = {a: 1, b: 2};
    const objek2 = {c: 3, d: 4};
    const objekGabungan = {...objek1,...objek2};
    console.log(objekGabungan);