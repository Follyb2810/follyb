export async function GET(req){
    const user ={ 
        name:'folly',
        email:'folly@gmail.com'
    }
    return new Response(JSON.stringify(user))
}