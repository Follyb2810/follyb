// import { Providers } from "next-auth";
// import GoogleProvider from 'next-auth/providers/google';
// import { connectToDB } from './../../../../utils/database';
// import User from './../../../../models/user';

// const handler = Providers.Google({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  
//   callbacks: {
//     async signIn({ profile, account, email, credentials }) {
//       try {
//         await connectToDB();
//         const userExist = await User.findOne({ email: profile.email });
//         if (!userExist) {
//           await User.create({
//             email: profile.email,
//             username: profile.name.replace(' ', '').toLowerCase(),
//             image: profile.picture,
//           });
//         }
//         return true;
//       } catch (error) {
//         console.error(error);
//         return false;
//       }
//     },
//     async session({ session, user }) {
//       if (user) {
//         const sessionUser = await User.findOne({
//           email: user.email,
//         });
//         if (sessionUser) {
//           session.user.id = sessionUser._id.toString();
//         }
//       }
//       return session;
//     },
//   },
// });

// export default handler;

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
    callbacks: {
        async session({session}){
            const sessionUser = await User.findOne({
                email:session.user.email
            })
            session.user.id=sessionUser._id.toString()
            return session
        },
        async signIn({profile}){
            try {
                await connectToDB()
                const userExist = await User.findOne({email:profile.email})
                if(!userExist){
                    await User.create({
                        email:profile.email,
                        username:profile.name.replace(' ','').toLowerCase(),
                        image:profile.picture 
                    })
                }
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }
       
    }
    
   
})


export  {handler as POST,handler as GET}