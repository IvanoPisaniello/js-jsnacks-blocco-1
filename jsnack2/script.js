const numbers = [20, 30, 20, 40, 20, 50, 20, 60, 9, 70];
let add = 0;


for (let i = 0; i < numbers.length; i++) {

    // currentnumbers = (numbers[i]);
    // console.log(currentnumbers);

    if (i % 2 !== 0) {
        // console.log(oddNumbers);
        add += numbers[i];

    }

}
console.log(add);
