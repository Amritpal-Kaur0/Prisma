import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


// interface User {
//     username:string,
//     password:string,
//     firstName:string,
//     LastName:string
// }
async function insertUser(username: string, password: string, firstName: string, LastName: string){

    const res= await prisma.user.create({
      data:{
        email:username,
        password,
        firstName,
        LastName
      } ,
      select:{
        id:true,
        email:true,
        password:true
      } 
    })
    console.log(res)
}

// insertUser("admin1@gmail.com","123456","amrit","kaur")

interface UpdateParams{
    firstName:string,
    LastName:string
}

async function updateUser(username:string,{
    firstName,
    LastName
}:UpdateParams){
    const res= await prisma.user.update({
        where:{ email:username },
        data:{
            firstName,
            LastName
        }
    })
    console.log(res); 
}

// updateUser("admin", {
//     firstName: "new name",
//     LastName: "kaur"
// })

//get user's details of given user by email

async function getInfo(username:string){
    const res =await prisma.user.findFirst({
        where:{email:username},
    })
    console.log(res);
}

// getInfo('admin1@gmail.com')