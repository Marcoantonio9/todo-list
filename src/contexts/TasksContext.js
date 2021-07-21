import React from 'react'

export const CreateTasksContext = React.createContext('')

export const GlobalTasks = ({children}) => {
  let date = new Date()
  const [dadosLocal, setDadosLocal] = React.useState({
    task: '',
    data: date.toLocaleDateString('pt-BR'),
    hora: date.toLocaleTimeString(),
    status: false
  })

  const [newTask, setNewTask] = React.useState([])    

  React.useEffect(() => {
    if(newTask.length > 0){
      localStorage.setItem('task', JSON.stringify(newTask))      
    }

  }, [newTask])  
  
  function setDados(event){
    event.preventDefault()
    if(localStorage.getItem('task') == null){
      setNewTask([...newTask, dadosLocal])
      localStorage.setItem('task', JSON.stringify(newTask))

    }else{
      setNewTask([...newTask, dadosLocal])
      localStorage.setItem('task', JSON.stringify(newTask))

    }  

    setDadosLocal({
      task: '',
      data: date.toLocaleDateString('pt-BR'),
      hora: date.toLocaleTimeString(),
      status: false
    })  
  }

  function deleteItem(task){
    const filtrarArray = newTask.filter((todo) => todo !== task)
    setNewTask(filtrarArray)
    if(newTask.length === 1){
      let array = []
      localStorage.setItem('task', JSON.stringify(array))
      console.log(newTask.length)
    }
  }

  function checkTask(task){
    if(task.status === false){
      task.status = !task.status
      let newStatus = task

      deleteItem()
      localStorage.setItem('task', newStatus)
      console.log('mudar para verdadeiro: ', newStatus)
    }else if(task.status === true){
      task.status = !task.status
      let newStatus = task

      deleteItem()
      localStorage.setItem('task', newStatus)   
      console.log('mudar para false: ', newStatus)
    }
  }

  return(
    <CreateTasksContext.Provider value={{dadosLocal,setDadosLocal, newTask, setNewTask, setDados, deleteItem, checkTask}}>
      {children}
    </CreateTasksContext.Provider>
  )
}