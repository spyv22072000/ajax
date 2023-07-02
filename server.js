const server= require('express');
const app=server();
const todos=require('./public/routes/todos');

app.use(server.json())
app.use(server.urlencoded({extended:true}))

app.use('/public',server.static(__dirname +"/public"))
app.get('/',function(req,res){
    res.send('hello');
})
app.use('/todos',todos);
app.listen(5000);
console.log("server start at" ,5000);

