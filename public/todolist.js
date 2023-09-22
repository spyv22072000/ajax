$(function(){
 let newtodobox=$('#newtodo')
 let addtodobtn=$('#addtodo')
 let todolist=$('#todolist')
 addtodobtn.click(function(){

    let newTodo=newtodobox.val()
    $.post(                          // AJAX HERE //
        '/todos',
        {task:newTodo},
        function(data){
            console.log(data)
            todolist.empty()
            for(todo of data){
                todolist.append("<li>" + todo.task + "</li>")
            }
        }
    )
 })
})
