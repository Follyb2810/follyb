
import {Schema,model,models} from 'mongoose'


const PromptsSchema  = new Schema({
     creator:{
        type:Schema.Types.ObjectId,
        ref:"User"
     },
     prompt:{
        type:String,
        require:[true,'Prompt is required']
     },
     tag:{
        type:String,
        required:[true,'Tag is required']
     }
})


const Prompt = models.Prompt || model('Prompt',PromptsSchema)
export default Prompt