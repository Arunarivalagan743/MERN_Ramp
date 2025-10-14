function double(num){
    num=num*2;
    return num;
}
let arr=[1,2,3,4,5];
let result=arr.map(double);
console.log(result);

function odd(num){
    return num % 2!=0;
}
let res=arr.filter(odd);
console.log(res);

let sum=arr.reduce((product, current)=>{
    return product * current;
});
console.log(sum);

let arr1=[3,4,5,6,8];
let arr2=arr1.map((num)=>{
    return num *3;
})
let arr3=arr2.filter((num)=>{
  return num % 2 ==0 ;
});

let sum1=arr3.reduce((product,current)=>{
    return product +current;
});
console.log(sum1);

let b=[1,2,3,4];

const [one,two] = b;
console.log(two);

const obj1={ x:1,y:2};
const obj2={z:5};
const obj3={...obj1,...obj2};
console.log(obj3);

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => data.map((user) =>console.log(user.name)))
.catch(error => console.error('Error:', error))


async function fetchData(){

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach(user => console.log(user.name));
    } catch (error) {
        console.error('Error:', error);
    }
}

let name ="harish";
let age =20;
console.log(`My name is ${name} and my age is ${age}`);