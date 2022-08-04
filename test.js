/* let age=20;
console.log(age, typeof(age)); 

let a = null;
console.log(a);

let b;
console.log(b);

let hobbies = ['yes', 'no', 'unsure'];
console.log(hobbies);

let person = {
    name : 'hoyin',
    age : 30,
    good : true,    
    hobbies: ['yes', 'no', 'unsure']
};
console.log(person);

let platform = "Youtube";
let lesson = '\'JS入門課程\'';
let teacher = `Yau`;
console.log(`${teacher} ${platform} ${lesson}`);

console.log(1==1);
console.log(1=='1'); //true
console.log(1===1);
console.log(1==='1'); //false 

let mark = 50;
let pass = null;

if (mark>=50) {
    console.log(`You get ${mark}, pass!`);
} else {
    console.log(`You get ${mark}, failed!`);
}

function hello() {
    console.log('hello');
}

hello();

const hi = function () {
    console.log('hi');
}

hi();

const say = function (msg) {
    console.log(msg);
}

say('how are you');

const rectangleArea = function (width=3, length=4) {
    return width*length;
}

let output = rectangleArea(1,2);
console.log(output);

const hi = () => {
    console.log('hi');
}

hi();

const say = msg => console.log(msg);

say('how are you');

const rectangleArea = (width=3, length=4) => width*length;

console.log(rectangleArea(1,2));

//Callback fn
const say = (callback) => {
    callback();
}

say(()=> console.log('callback function'));

setTimeout(() => {
    console.log('setTimeout')
}, 4000);

const firstP = document.querySelector('p');
console.log(firstP);

const secondP = document.querySelector('.second');
console.log(secondP);

const thirdP = document.querySelector('#copyright');
console.log(thirdP);

const allP = document.querySelectorAll('p');
console.log(allP);

allP.forEach((item)=>{
    console.log(item);
})

console.log(document.querySelector('body > h1'));

const div = document.querySelector('div');
div.addEventListener('click', (e)=>{
    console.log(e);
    e.target.remove();
})
*/

console.log("how are you");