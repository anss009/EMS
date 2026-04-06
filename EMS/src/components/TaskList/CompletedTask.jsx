import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className=' h-full flex-shrink-0  w-[300px] bg-purple-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>{data.category}</h3>
          <h4 className='text-sm'>{data.date}</h4>
        </div>
          <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm mt-2'>
            {data.description}
          </p>
          <div className='mt-2'>
            <button className='w-full bg-green-600 rounded py-1 px-2 text-sm'>Done</button>
          </div>
      </div>    
  )
}

export default CompletedTask
