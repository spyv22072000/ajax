const route= require('express').Router()
 
let todo=[ {task:'new task'}];

route.get('/',function(req,res){
  res.send(todo)
})
route.post('/',function(req,res){
todo.push({
    task:req.body.task
})
res.send(todo)
})
module.exports=route;