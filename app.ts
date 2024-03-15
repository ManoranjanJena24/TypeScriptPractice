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
const aElement=document.getElementById('a') as HTMLInputElement
const bElement=document.getElementById('b') as HTMLInputElement
const btn=document.querySelector('button')!

function add(num1:number|string,num2:number|string){
    if(typeof(num1)==='number' && typeof num2==='number')
        return num1+num2
    else if (typeof(num1)==='string' && typeof num2==='string')
        return num1+' '+num2
    return +num1+ +num2
  }

  btn.addEventListener('click',()=>{
    const num1=aElement.value
    const num2=bElement.value
    const result=add(+num1, +num2)
    const stringResult=add(num1, num2)
    console.log(result)
    console.log(stringResult)
  })