import React, {useState} from 'react'
import TodoList from './TodoList'

const App =  () => {

  const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: false},
  ])

  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = (e) => {
    if (e.key === 'Enter') {
      setTodos([
          ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('')
    }
  }

    return (
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text"
                   value={todoTitle}
                   onChange={e => setTodoTitle(e.target.value)}
                   onKeyPress={addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    );
}

export default App