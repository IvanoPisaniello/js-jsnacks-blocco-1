const firstName = ["Mario", "Giuseppe", "Giovanni", "Carlo"];
const lastName = ["Rossi", "verdi", "Bianchi", "Gialli"];
const min = 1;
const max = 3;

for (let i = 0; i < firstName.length; i++) {

    const randomName = Math.floor(Math.random() * firstName.length);

    let randomFirst = (firstName[randomName]);




    for (let i = 0; i < lastName.length; i++) {
        const randomLastName = Math.floor(Math.random() * lastName.length);

        let randomLast = (lastName[randomLastName]);


        console.log(randomFirst + " " + randomLast);


    };


};











