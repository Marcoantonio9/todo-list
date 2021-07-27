import React from 'react'
import '../styles/tasks.css'
import { CreateTasksContext } from '../contexts/TasksContext'

const Tasks = () => {
  const TaskContext = React.useContext(CreateTasksContext)
  

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
                    <i className="fas fa-edit" onClick={() => TaskContext.editTask(task)}></i>
                  </div> 

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
        {TaskContext.modal && (
          <div className="modal">
            <div id="fechar-modal">
              <i className="fas fa-times" onClick={() => TaskContext.editTask()}></i>
            </div>
            <div id="itens-edit">
              <h3>Editar Tarefa</h3>
              <textarea id="box-task-edit" ref={TaskContext.inputRef} value={TaskContext.newTaskEdit.task} onChange={TaskContext.changeEditTask}/>
              {TaskContext.savedSuccess && (
                <span className="alert">Edição salva com sucesso! </span>              
              )}
              <button id="btn-salvar-edicao" onClick={() => TaskContext.saveEditTask()}>Salvar</button>
            </div>
          </div>            
        )}    
    </div>
  )
}

export default Tasks
