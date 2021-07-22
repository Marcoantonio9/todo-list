import React from 'react'
import '../styles/tasks.css'
import { CreateTasksContext } from '../contexts/TasksContext'

const Tasks = () => {
  const TaskContext = React.useContext(CreateTasksContext)

  // function deleteTask(task){
  //   TaskContext.newTask.splice(TaskContext.newTask.indexOf(task), 1)
  
  //   // let armazenaNovoValor = TaskContext.newTask
  //   // console.log('nova: ', armazenaNovoValor)

  //   // //localStorage.setItem('task', JSON.stringify(armazenaNovoValor))
  //   // TaskContext.newTask(armazenaNovoValor)

  //   // console.log(TaskContext.newTask)
  // }

  React.useEffect(() => {
    console.log('mudou?')
  }, [TaskContext.newTask])


  return (
    <div className="principal">
        {TaskContext.newTask.length === 0 && <h2 className="txt-nenhuma-tarefa">Nenhuma tarefa adicionada.</h2>}
        {TaskContext.newTask && TaskContext.newTask.map((task, i) => (
          <>
            <div className="area-texto" key={i}>
              <div className="container-txt">
                <div className="texto" style={{color: task.status ? 'green' : 'black', textDecoration: task.status ? 'line-through' : 'none'}}>
                  {task.task}
                </div>
                <div className="area-icons">
                  <div className="icones">
                    <i className="fas fa-check" style={{color: task.status ? 'green' : 'black'}} onClick={() => TaskContext.checkTask(task)}></i>
                  </div>

                  <div className="icones">
                    <i className="fas fa-times icon-fechar" onClick={() => TaskContext.deleteItem(task)}></i>
                  </div>

                </div>
              </div>
            </div>
          </>
        ))}        
    </div>
  )
}

export default Tasks
