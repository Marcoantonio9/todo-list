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
    if(dadosLocal.task === ''){
      alert('Preencha o campo.')
    }
    else if(localStorage.getItem('task') == null){
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

  const [modal, setModal] = React.useState(false)  
  const [newTaskEdit, setNewTaskEdit] = React.useState({})
  const [armazenaTask, setArmazenaTask] = React.useState({})
  const [savedSuccess, setSavedSuccess] = React.useState(false)
  const inputRef = React.useRef();

  function editTask(task){
    console.log(task)
    if(modal === false){
      setModal(true)
      setTimeout(() => {
        inputRef.current.focus();
      }, 100)
    }else if(modal === true){
      setModal(false)
    }
    setNewTaskEdit(task)
    setArmazenaTask(task)
  }

  function changeEditTask({target}){
    setNewTaskEdit(target.value)
  
  }

  function saveEditTask(){
    console.log('aqui armenaza: ', armazenaTask.task)
    console.log('aqui 2: ', newTaskEdit.task)
    if(armazenaTask.task !== newTaskEdit.task){
      deleteItem()
      armazenaTask.task = newTaskEdit
      localStorage.setItem('task', armazenaTask)       
    }
    setSavedSuccess(true)
    setTimeout(() => {
      setSavedSuccess(false)
    }, 2000)      

  }


  function checkTask(task){
    if(task.status === false){
      task.status = !task.status
      let newStatus = task

      deleteItem()
      localStorage.setItem('task', newStatus)

    }else if(task.status === true){
      task.status = !task.status
      let newStatus = task

      deleteItem()
      localStorage.setItem('task', newStatus)   

    }
  }

  function deleteItem(task){
    const filtrarArray = newTask.filter((todo) => todo !== task)
    setNewTask(filtrarArray)
    if(newTask.length === 1){
      let array = []
      localStorage.setItem('task', JSON.stringify(array))

    }
  }  

  return(
    <CreateTasksContext.Provider value={{dadosLocal,setDadosLocal, newTask, setNewTask, setDados, deleteItem, checkTask, modal, setModal, editTask, newTaskEdit, setNewTaskEdit, changeEditTask, saveEditTask, savedSuccess, setSavedSuccess, inputRef}}>
      {children}
    </CreateTasksContext.Provider>
  )
}