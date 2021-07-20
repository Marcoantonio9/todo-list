import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

import { GlobalTasks } from './contexts/TasksContext'

import './styles/global.css'

const App = () => {
  return(
    <div>
      <GlobalTasks>
        <Header />
        <Tasks />        
      </GlobalTasks>
    </div>
  )
}
export default App