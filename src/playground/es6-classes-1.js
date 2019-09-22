
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Student('Tamara', 33, 'Basketry');
console.log(me.getDescription());

const you = new Traveler();
console.log(you.getGreeting());

const thee = new Traveler('Sam', 52, 'San Diego');
console.log(thee.getGreeting());