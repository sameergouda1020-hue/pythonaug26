let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolve")
    // reject("reject")
  }, 2000);
});


// promise.then((res)=>{
//   console.log("this is resolve block")
// }).catch(()=>{
//     console.log("this is reject block")
// })

// how to handle the promises

// the replacement of then and catch block are async and await


async function getData(){
    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let data=await res.json()
    console.log(data)
}

getData()
