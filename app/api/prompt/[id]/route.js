import { connectToDB } from "@/utils/database"
import Prompt from "@/models/prompts"
export const GET = async (req,{params})=>{
    try {
         await connectToDB()
         
         const prompts = await Prompt.findById(params.id).populate('creator')
         if(!prompts) return new Response('prompts not found',{status:404})   
         return new Response(JSON.stringify(prompts),{status:200})
        } catch (error) {
            return new Response('fail ro fetch all prompt',{status:500})
        
    }
}

export const PATCH = async(req,{params})=>{
    const {prompt,tag}=await req.json()
    try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id)
        if(!existingPrompt) return new Response('prompt not found',{status:404})
        existingPrompt.prompt =prompt
        existingPrompt.tag =tag
        await existingPrompt.save()
        return new Response.json(JSON.stringify(existingPrompt),{status:200})
    } catch (error) {
        return new Response.json('fail to update prompt',{status:500})
        
    }
}

export const Delete = async(req,{params})=>{
    try {
        await connectToDB()
        await Prompt.findByIdAndRemove(params.id)
        return new Response('prompt deleted successfully',{status:200})
    } catch (error) {
        return new Response('fail to  delete prompt',{status:500})
        
    }
}