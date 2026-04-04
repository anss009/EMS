import React from 'react'
import AcceptTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (

    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-self-start  gap-5 flex-nowrap  mt-10 '>
      <AcceptTask/>
     <NewTask/>
      <CompletedTask/>
      <FailedTask/>
    </div>
  )
}

export default TaskList
