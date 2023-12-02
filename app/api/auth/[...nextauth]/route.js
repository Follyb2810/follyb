import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
// console.log({
//     clientId:process.env.GOOGLE_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET
// })
import {connectToDB} from './../../../../utils/database'
import User from './../../../../models/user'
const handler =NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}){},
    async signIn({profile}){
        try {
            await connectToDB()
        } catch (error) {
            console.log(error)
            return false
        }
    }
})


export  {handler as POST,handler as GET}