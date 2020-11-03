// 1

const calculateAge = (birthYear) {
    return 2019 - birthYear;
}

const yearUntilRetirement = (firstName) {
    let age = calculateAge(object);
    const retirement = 60 - age;
    let year = 2020

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} ${years}`);
    } else{
        console.log(`${firstName} is already retired`);  
    }
}

console.log(yearUntilRetirement(Mario, retirement));

// 2

const addNumbers6 = (...numbers) => {
    console.log(numbers);
    let sum = 0;
    numbers.forEach(number => sum += number)
    return sum;
// 3


    let phi = 3.14;
    let power = 2;
    let radius = 0;
 
    let calculateArea = (radius, power) => {
    return phi * Math.pow(radius, power);
    };
 
    radius = 21;
    let area21 = calculateArea(radius, 2);
 
    radius = 7;
    let area7 = calculateArea(radius, 2);
 
    console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4

    const makeAjaxRequest = (url = 'www.google.com', method = 'GET') => {
    if (!method) {
        method = 'GET';
   }
   console.log(url, method);
    }

    makeAjaxRequest();


// Bagian 2

// 1

    const WarnaKesukaan = (warna='putih') =>{
        return console.log(`Warna kesukaan saya adalah ${warna}`)
        }
    
    WarnaKesukaan('Biru');

//2.
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka']

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log (semuaNamaBuah)
