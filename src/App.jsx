import { useState , useEffect } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  useEffect(() => {
  let   todoString = localStorage.getItem("todos")
  if(todoString){
   let todos = JSON.parse( localStorage.getItem("todos") )
   setTodos(todos)
    }
}, [])


const saveToLS = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const toggleFinished = (params) => {
  setShowFinished(!showFinished)
}

 const handleEdit = (e ,id) => {
  let t = todos.filter(i=>i.id === id)
  setTodo(t[0].todo)
  let newTodos = todos.filter(item =>{
    return item.id !== id
  });
  setTodos(newTodos)
  saveToLS()

  
 }
  const handleDelete = (e ,id) => {
 
 
  let newTodos = todos.filter(item =>{
    return item.id !== id
  });
  setTodos(newTodos)

  confirm("Are you sure you want to delete this task?")
saveToLS()
    
  }

  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false}])
    setTodo("")
    saveToLS()
  }
 const handleChange = (e) => {
    setTodo(e.target.value)
    
 }

const handleCheckbox = (e) => {
   let id = e.target.name;
   let index = todos.findIndex(item => {
    return item.id === id;
   })
  let newTodos = [...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  saveToLS()
}
 
  return (
    <>
      <Navbar />
      <div className="Container">
        <div className=" bg-blue-400  mx-10 my-auto p-4 rounded-lg shadow-lg shadow-blue-500/50">
          <div className="AddTodo">
            <h2 className="text-lg font-bold text-white cursor-pointer">
              Add Todo
            </h2>
            <input onChange={handleChange} value={todo} type="text" className="bg-white p-2 m-2" />
            <button onClick={handleAdd}  disabled={todo.length<3}  className="p-2 mx-2 bg-white text-blue-500 rounded-lg  ">
              ADD
            </button>
          </div>
          <input onChange={toggleFinished} type="Checkbox" checked={showFinished} /> Show Finished 
          <h2 className="text-2xl font-bold underline text-white cursor-pointer">
            Your Tasks
          </h2>

          <div className="todos ">
            {todos.length == 0 && <div className="text-white">No tasks added yet</div>  }
            {todos.map(item => {
              

           return (showFinished || !item.isCompleted) && <div key={item.id} className="Todo flex justify-between text-white my-2">
             <div className="flex gap-2 ">
             
              <input  name={item.id} onChange={handleCheckbox}   type="checkbox" checked={item.isCompleted}  id="" />
              <div  className= {item.isCompleted?"line-through":""}>{item.todo} </div>
             </div>
                <div className="buttons ">
                
                  <button onClick={(e)=>{handleEdit(e, item.id)}} className="p-2 mx-2 bg-white text-blue-500 rounded-lg">
                    Edit
                  </button>
                  <button onClick={(e)=>{handleDelete(e , item.id)}} className="p-2 mx-2 bg-white text-blue-500 rounded-lg">
                    Delete
                  </button>
                </div>
            </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
