// Arrow Function 

    // 2 argument (Parameter)
        // const name = function(firstName, lastName) {
        //     return firstName + lastName;
        // }
        // console.log(name('Mario', 'Arsjad')); // function digunakan untuk mendeklarasi sebuah variabel

    // tidak ada argument (Parameter) 
        // const kumpulanangka = () => {
        //     const angka = ["1", "2", "3", "4"];
        //      return angka[Math.floor(Math.random()*(angka.length))];// outputnya adalah random
        //     }
        //     console.log(kumpulanangka()); 

    // tidak ada argument (Parameter) dengan implict
        // const calcTotal = () => 4 * 5;
        // console.log(calcTotal());
    
    //
        // const year = [1990, 1992, 2001, 2005];

        // const calcAge5 = year.map(function (el){
        //     return 2020 - el;
        //  });

        // const calcAge6 = year.map((el) => 2020 - el);
        // console.log(calcAge6);

    //Default Parameter
        // const calcAge = (birthYear, currentYear = 2020) => currentYear - birthYear;
        // console.log(calcAge(1991,));


        
    // Exercise
    // Conver to ES6 syntax


        const yearUntilRetirement = (firstName) => {
            let age = 28;
            const retirement = 65 - age;
            let year = 2020;
            
            if(retirement > 0){
                console.log(`${firstName} will retire in ${retirement} years.`);
            }
            else{
                console.log(`${firstName} has already retired.`);
            }
        }
        
        console.log(yearUntilRetirement("Mario", ));

            
            