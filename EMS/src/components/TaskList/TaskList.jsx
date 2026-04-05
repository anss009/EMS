import React from 'react'
import AcceptTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data)
  return (

    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-self-start  gap-5 flex-nowrap  mt-10 '>
      {data.tasks.map((elem, idx)=>{
        if(elem.active){
          return <AcceptTask key = {idx} /> 
        }
        if(elem.newTask){
          return <NewTask key = {idx} />
        }
        if(elem.complete){
          return <CompletedTask key = {idx} />
        }
        if(elem.failed){
          return <FailedTask key = {idx} />
        }
      })}
    </div>
  )
}

export default TaskList
