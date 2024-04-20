// fetch('https://dummyjson.com/products').then((res)=>{
//     console.log(res.json())
// })


// fetch('https://dummyjson.com/products').then((res)=>{
//     res.json().then((data)=>{
//         console.log(data)
//     })
// })


// fetch('https://dummyjson.com/products').then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data)
// }) 


fetch('https://dummyjson.com/products')
.then((res)=>res.json())
.then((data)=>console.log(data))


//if when get error
// fetch('https://dummyjson.com/products')
// .then((res)=>{
//     if(res.ok){
//         console.log("success")
//     }else{
//         console.log("not successfull")
//     }
// })
// .then((data)=>console.log(data))
// .catch(error =>console.log('ERROR'))