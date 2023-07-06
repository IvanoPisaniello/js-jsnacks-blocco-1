const firstName = ["Mario", "Giuseppe", "Giovanni", "Carlo"];
const lastName = ["Rossi", "verdi", "Bianchi", "Gialli"];
const min = 1;
const max = 3;

for (let i = 0; i < firstName.length; i++) {

    for (let i = 0; i < lastName.length; i++) {
        const randomLastName = Math.floor(Math.random() * lastName.length);
        const randomName = Math.floor(Math.random() * firstName.length);
        let randomLast = (lastName[randomLastName]);

        let randomFirst = (firstName[randomName]);
        console.log(randomFirst + " " + randomLast);


    };


};











