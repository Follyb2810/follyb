import { NextResponse } from "next/server"

export async function GET(req){
    const user ={
        name:'folly',
        email:'folly@gmail.com'
    }
    return NextResponse.json(user)
    
    // console.log(req.headers)
}
export async function POST(req){

}