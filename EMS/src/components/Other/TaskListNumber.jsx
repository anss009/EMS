import React from 'react'

const TaskListNumber = () => {
  return (
    <div className=' flex mt-10 justify-between gap-5 screen '>
      <div className='rounded-xl py-7 px-9 w-[40%] bg-red-400'> 
        <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-7 px-9 w-[40%] bg-yellow-400'> 
        <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-7 px-9 w-[40%] bg-violet-400'> 
        <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='rounded-xl py-7 px-9 w-[40%] bg-purple-400'> 
        <h2 className='text-2xl font-semibold'>0</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      
    </div>
  )
}

export default TaskListNumber
