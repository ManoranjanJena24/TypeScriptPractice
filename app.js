"use strict";
// const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const numresults: Array<number>=[]
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
//   const myPromise = new Promise<string>((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('It worked')
//     },1000)
//   });
//   myPromise.then((result)=>{
//     console.log(result.split('w'))
//   })
// import express = require('express')
// or
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(3000, () => { console.log("server running"); });
