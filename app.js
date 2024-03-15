"use strict";
//1
// function add(a,b){
//     return a+b
//   }
//   console.log(add(24,2))
//   console.log(add('1','6'))
//2
// function add(a:number,b:number){
//     return a+b
//   }
//   console.log(add(24,2))
//   console.log(add('1','6'))
//3
// const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!
// function add(num1:number,num2:number){
//     return num1+num2
//   }
//   btn.addEventListener('click',()=>{
//     const num1=aElement.value
//     const num2=bElement.value
//     const result=add(+num1,+num2)
//     console.log(result)
//   })
//4
// const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!
// function add(num1:number|string,num2:number|string){
//     if(typeof(num1)==='number' && typeof num2==='number')
//         return num1+num2
//     else if (typeof(num1)==='string' && typeof num2==='string')
//         return num1+' '+num2
//     return +num1+ +num2
//   }
//   btn.addEventListener('click',()=>{
//     const num1=aElement.value
//     const num2=bElement.value
//     const result=add(+num1, +num2)
//     const stringResult=add(num1, num2)
//     console.log(result)
//     console.log(stringResult)
//   })
//   const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!
// const numresults: number[]=[]
// const stringresults:string[]=[]
// function add(num1:number|string,num2:number|string){
//     if(typeof(num1)==='number' && typeof num2==='number')
//         return num1+num2
//     else if (typeof(num1)==='string' && typeof num2==='string')
//         return num1+' '+num2
//     return +num1+ +num2
//   }
//   function printResult(resultObj:{val:number; timestamp:Date}){
//     console.log(resultObj.val)
//   }
//   btn.addEventListener('click',()=>{
//     const num1=aElement.value
//     const num2=bElement.value
//     const result=add(+num1, +num2)
//     const stringResult=add(num1, num2)
//     numresults.push(result as number)
//     stringresults.push(stringResult as string)
//     console.log(numresults,stringresults)
//     printResult({val:result as number, timestamp:new Date()})
//   })
// const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!
// const numresults: number[]=[]
// const stringresults:string[]=[]
// type NumOrString= number|string
// type Result={val:number; timestamp:Date}
// interface ResultObj
// {
//     val:number;
//     timestamp:Date
// }
// function add(num1:NumOrString, num2:NumOrString){
//     if(typeof(num1)==='number' && typeof num2==='number')
//         return num1+num2
//     else if (typeof(num1)==='string' && typeof num2==='string')
//         return num1+' '+num2
//     return +num1+ +num2
//   }
//   function printResult(resultObj:ResultObj){
//     console.log(resultObj.val)
//   }
//   btn.addEventListener('click',()=>{
//     const num1=aElement.value
//     const num2=bElement.value
//     const result=add(+num1, +num2)
//     const stringResult=add(num1, num2)
//     numresults.push(result as number)
//     stringresults.push(stringResult as string)
//     console.log(numresults,stringresults)
//     printResult({val:result as number, timestamp:new Date()})
//   })
const aElement = document.getElementById('a');
const bElement = document.getElementById('b');
const btn = document.querySelector('button');
const numresults = [];
const stringresults = [];
function add(num1, num2) {
    if (typeof (num1) === 'number' && typeof num2 === 'number')
        return num1 + num2;
    else if (typeof (num1) === 'string' && typeof num2 === 'string')
        return num1 + ' ' + num2;
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', () => {
    const num1 = aElement.value;
    const num2 = bElement.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    numresults.push(result);
    stringresults.push(stringResult);
    console.log(numresults, stringresults);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
