//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(argyuments);
    return a + b;
};

console.log(add(43, 6));

//this keyword - no longer bound

const user = {
    name: 'Brian G',
    cities: ['Washington', 'San Diego', 'Huntsville'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has live in ' + city + '!');
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [3, 7, 22],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy + ' times '+ number + ' is ' + this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());