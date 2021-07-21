import React from 'react'
import '../styles/tasks.css'
import { CreateTasksContext } from '../contexts/TasksContext'

const Tasks = () => {
  const TaskContext = React.useContext(CreateTasksContext)
  const [selecionarTask, SetSelecionarTask] = React.useState('')

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
    <div class="principal">
        {TaskContext.newTask.map((task) => (
          <>
            <div class="area-texto">
              <div class="container-txt">
                <div class="texto">
                  {task.task}
                </div>
                <div class="fechar">
                  <div class="icones">
                    <i class="fas fa-check"></i>
                  </div>

                  <div class="icones">
                    <i class="fas fa-times" onClick={() => TaskContext.deleteItem(task)}></i>
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
