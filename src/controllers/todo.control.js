const express=require("express")
const router=express.Router
const Todo=require("../models/todo.model")
const authenticate = require("../middleware/protect")

router.get("",authenticate, async (req,res)=>{
    const todo= await Todo.find({}).lean().exec();
    res.status(200).send({todo})
})


router.post("",authenticate,async (req,res)=>{
    const todo= await Todo.create(req.body)
   return  res.status(201).send({todo})
})


router.patch("/:id",authenticate,async (req,res)=>{
  try{
   const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
    .lean()
    .exec();

  return res.status(200).send(post);
} catch (err) {
  return res.status(401).send({ message: err.message });
}
})


router.delete("/:id",authenticate,async (req,res)=>{
    try{
    const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(todo);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
})

module.exports=router
