const mongoose=require("monggose")
//user parent
const todoSchema= new mongoose.Schema({
    title :{type:String, required:true},
    
    userid:{ type: mongoose.Schema.Types.ObjectId, ref: "user",  required: true,}
},{
    timestamps:true
})
const Todo=mongoose.model("todo",todoSchema)
module.exports=Todo