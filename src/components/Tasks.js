import React from 'react'
import '../styles/tasks.css'
import { CreateTasksContext } from '../contexts/TasksContext'

const Tasks = () => {
  const TaskContext = React.useContext(CreateTasksContext)
  const [selecionarTask, SetSelecionarTask] = React.useState('')

  function deleteTask(task){
    console.log('foi?', task)
  }
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
                    <i class="fas fa-times" onClick={() => deleteTask(task)}></i>
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
