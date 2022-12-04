import React from 'react'

function ToDoList() {
    //Hooks

    //loads data from json file || creates an empty array
    const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [todo, setTodo] = React.useState("");
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");

    //saves data to local storage
    //[] is to designate when () runs (it runs when 'todos' change)
    //converts todos to JSON
    React.useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        }, [todos]);

    function handleSubmit(e) {
        //prevents default action (refresh page)
        e.preventDefault()
        
        //prevents blank inputs
        if (todo[0] === ""){
            return
        }

        //constructor 
        const newTodo = {
            //id needs to be unique (this gets the time)
            id: new Date().getTime(),
            text: todo,
            completed: false,
        }
        
        //concat adds new obj to todos array
        setTodos([...todos].concat(newTodo))
        setTodo("")
    }

    //delete function
    function deleteTodo(id) {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id)

        setTodos(updatedTodos)
    }

    //complete function
    function toggleComplete(id) {
        const updateTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updateTodos)
    }

    //edit function
    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)

        //reset editing logic
        setTodoEditing(null)
        setEditingText("")
    }
    
    // if else function. defaults as plan text, changes to input for editing
    // turns text into "editable text"
    return (
        <div className='todo-list'>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    onChange={(e) => setTodo(e.target.value)} 
                    value={todo}/>
                <button type="submit">Add Todo</button>
            </form>

            {todos.map((todo) => <div key={todo.id}> 

                    {todoEditing === todo.id ? 
                    (<input 
                        type="text" 
                        onChange={(e) => setEditingText(e.target.value)} 
                        value={editingText}  
                    />):
                    <div>{todo.text}</div>}

                    

                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    <input 
                        type="checkbox" 
                        onChange={() => toggleComplete(todo.id)}
                        checked={todo.completed} />
                        {todoEditing === todo.id ?
                        (<button onClick={() => editTodo(todo.id)}>Submit Edits</button>)
                        :
                        (<button onClick={() => setTodoEditing(todo.id)}>Edit</button>)}
                        
                </div>
            )}
        </div>
  )
}

export default ToDoList