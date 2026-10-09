// get user by id

async function getuserBuId(id) {
  try{
    let res = await fetch (`https://jsonplaceholder.typicode.com/posts/$id`);
    let user = await res.jsom();


    console.log("")
  }  
}

