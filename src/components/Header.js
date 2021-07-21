import React from 'react'
import { CreateTasksContext } from '../contexts/TasksContext'
import '../styles/header.css'

const Header = () => {
  const TaskContext = React.useContext(CreateTasksContext)

  React.useEffect(() => {
    if(localStorage.getItem('task') !== null){
      let teste = JSON.parse(localStorage.getItem('task'))

      TaskContext.setNewTask(...TaskContext.newTask, teste)
      console.log(teste)
    }
  }, [])  

  function handleChange({target}){
    const {id, value} = target
    TaskContext.setDadosLocal({...TaskContext.dadosLocal, [id]: value})
  }

  return (
    <div id="header">
      <div>
        <h2>Lista de Tarefas</h2>
      </div>
      
      <form>
        <input type="text" value={TaskContext.dadosLocal.task || ''} id="task" onChange={handleChange}/>
        <button onClick={TaskContext.setDados}>Adicionar</button>
      </form>
    </div>
  )
}

export default Header
