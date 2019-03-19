var todo=["Buy new turtle"];
var input = prompt("What would you like to do?");

while(input!=="quit")
{
if(input==="list")
{
	listTodos();
}
else if(input==="new")
{
	newTodo();
}
else if(input==="delete")
{
	deleteTodo()
}

input = prompt("What would you like to do?");

}
console.log("Ok, you have quit the app");


function listTodos()
{
console.log("**********")
	todo.forEach(function(todo,i)
	{
        
        console.log(i + ": " +todo);
	});
	console.log("**********")
}

function newTodo()
{
	var newtodo = prompt("Enter new todo");
	todo.push(newtodo);
	console.log("added todo")
}

function deleteTodo()
{
	var index = prompt("enter index of todo to delete");
	todo.splice(index,1);
	console.log("deleted todo")
}