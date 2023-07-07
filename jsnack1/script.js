const firstNames = ["Mario", "Giuseppe", "Giovanni", "Carlo"];
const lastNames = ["Rossi", "verdi", "Bianchi", "Gialli"];

const listaInvitati = [];


for (let i = 0; i < 30; i++) {
    const randomLastName = Math.floor(Math.random() * lastNames.length);
    const randomName = Math.floor(Math.random() * firstNames.length);
    let randomLast = (lastNames[randomLastName]);

    let randomFirst = (firstNames[randomName]);
    let nuovoNome = (randomFirst + " " + randomLast);

    console.log(nuovoNome);
    //convertire array in stringa --> nuovoNome.join(" ")



};
















