// const aElement=document.getElementById('a') as HTMLInputElement
// const bElement=document.getElementById('b') as HTMLInputElement
// const btn=document.querySelector('button')!

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
import express from 'express'
import bodyParser from 'body-parser'
import todoRoutes from './routes/todos'

const app = express()
app.use(bodyParser.json())
app.use(todoRoutes)
app.listen(3000,() => {console.log("server running") })