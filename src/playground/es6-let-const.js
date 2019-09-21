var nameVar = 'Brian';
nameVar = 'Matt';
console.log('nameVar', nameVar)

let nameLet = 'Lucy';
nameLet = 'Julia';
console.log('nameLet', nameLet);

const nameConst = 'Franklin';
console.log('nameConst', nameConst);

//Block scoping

const fullName = 'Rosa Park';

if (fullName){
    let firstName = fullName.split(' ')[0]
    console.log(firstName)
}

//console.log(firstName)