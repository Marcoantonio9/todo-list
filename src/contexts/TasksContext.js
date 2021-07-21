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
    console.log(newTask)
  }, [newTask])  
  
  function setDados(event){
    event.preventDefault()
    if(localStorage.getItem('task') == null){
      //newTask.push(dadosLocal)
      setNewTask([...newTask, dadosLocal])
      localStorage.setItem('task', JSON.stringify(newTask))

    }else{
      //newTask.push(dadosLocal)

      setNewTask([...newTask, dadosLocal])
      // localStorage.setItem('task', JSON.stringify(newTask))

    }    
  }

  function deleteItem(task){
    newTask.splice(newTask.indexOf(task), 1)  
    console.log(newTask)  
    
    let novoArray = newTask
    setNewTask('')
    console.log('novo: ', novoArray)
    setNewTask([novoArray])
    // // console.log('novo: ', novoArray)
    // // setNewTask(...newTask, newTask)


  }

  return(
    <CreateTasksContext.Provider value={{dadosLocal,setDadosLocal, newTask, setNewTask, setDados, deleteItem}}>
      {children}
    </CreateTasksContext.Provider>
  )
}