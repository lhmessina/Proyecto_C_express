let usertest ={

    title:"ABC",
    description:"Z",
    code :"QQ",
    price:20,
    status:true,
    
    category:"SR650",
    thumbnails:"xx"

}
const new_code = usertest.code
let users = [{"id":2,"title":"FFC","description":"doñatota","code":"QQ","price":18880,"status":true,"stock":10,"category":"AV","thumbnails":"SR","email":"milei"},{"id":2,"title":"JK","description":"diego","code":"QQ","price":1000,"status":true,"stock":10,"category":"AV","thumbnails":"SR","email":"milei"},{"id":3,"title":"FFC","description":"diego","code":"QQ","price":1000,"status":true,"stock":10,"category":"AV","thumbnails":"SR","email":"milei"},{"id":4,"title":"FFC","description":"diego","code":"ASFG","price":1000,"status":true,"stock":10,"category":"AV","thumbnails":"SR","email":"milei"}]
if (Object.values(users).includes("FFC")) throw new Error ("anda a caga") 
//console.log(users.find( users =>  users.code === "QQ"))
// console.log('pppp',new_code)
// const code_s = users.find( p =>  p.value === 20)
// console.log ('jjjjj',code_s)



//const productExists = users.find((p) => p.code === code);
//index = products.findIndex( user => user.code === code );  

// let id = users.length +1;
//   const { title,description,code, price,status,stock,category,thumbnails} = usertest
  
//   let newuser = {
//     id,
//     title,
//     description,
//     code,
//     price,
//     status,
//     stock,
//     category,
//     thumbnails

//   }
//   //console.log(newuser)
//   // Controlamos que el cliente envíe si o si la edad sino le devolvemos una respuesta de erro
//   //if (!user.age || !user.nombre || !user.apellido) return res.status(400).json({ status: "Error", msg: "Campos Obligatorios" });
//   console.log(Object.entries(newuser).length)


//    //const a = Object.entries(newuser).length
//    //const b = Object.values(newuser)
//    //console.log(Object.keys(newuser))
//    console.log(newuser.thumbnails)
//   if (Object.values(newuser).includes(undefined) && newuser.thumbnails!= undefined) throw new Error ("anda a caga") 
//      //
//     //     console.log('llllll')
//     // } 
//   //users.push(user);
//   users.push(newuser)
//   //console.log(users)
// //   const me = Object(usertest);
// //   const you =Object(newuser)
// //   for (const [key] of Object.entries(usertest)) {
// //     for (const [key] of Object.entries(newuser)) {
// //             //console.log(`${key}: ${value}`);
// //             console.log(`${key}`);
// //   }
// //   }


// //   console.log(Object.keys(me))
// //   console.log(Object.keys(you))
//   //console.log('ppp',me)

