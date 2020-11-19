//Destrukturisasi (Penjelasan Sir)
//----------------------------------

// Memecah item atau propery pada array atau object ke dalam variable yang berbeda

/*1. Array

const colors = ['Merah', 'Kuning', 'Hijau'];

let satu = colors[0];
let dua = colors[1];
let tiga = colors[2];

let [satu, dua, tiga] = colors;
console.log(satu, dua, tiga);

let [satu, dua] = colors;
console.log(satu, dua);

let [satu, , tiga] = colors;
console.log(satu, tiga);

let [satu, dua, tiga, empat ="Biru"] = colors;
console.log(satu, dua, tiga, empat);
*/

/*2. Object

const user = {
    name: "John",
    gender: "Male",
    age: 33
};

let name = user.name;
let gender = user.gender;
let age = user.age;

let { name, gender, age } = user;
console.log(name, gender, age);

let {name, gender, age, born = "Manado" } = user;
console.log(name, gender, age, born);

let { name, age } = user;
console.log(name, age);

let { name: nama, age: umur } = user;
console.log(nama, umur);

const display = ( name, age ) => {
    console.log('Nama saya adalah ${name}, Umur sata adalah ${age}');
};
*/

//3. Array Object

//const users = {
//    { id: 1, name: "John" },
//    { id: 2, name: "Jane" },
//    { id: 3, name: "Bob" },
//};

//let [user1, user2, user3] = users;
//console.log(user1, user2, user3);

//let [{id: idUser1, name: nameUser1}, 
//    {id: idUser2, name: nameUser2},
//    {id: idUser3, name: nameUser3},
//] = users;
//console.log(idUser1, nameUser1);

//4. kombinasi dengan Rest Operator\

//const colors = ["Merah", "Kuning", "Hijau", "Biru"];

//let [satu, ...lainnya] = colors;

//console.log(satu);
//console.log(lainnya);