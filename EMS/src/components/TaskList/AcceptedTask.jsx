import React from 'react'

const AcceptTask = () => {
  return (
      <div className=' h-full flex-shrink-0  w-[300px] bg-red-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
          <h4 className='text-sm'>23 march 2026</h4>
        </div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, commodi reprehenderit molestiae totam labore.
          </p>
          <div className=' flex justifly-between mt-4 '>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completd</button>
        <button className='bg-red-500 py-1 px-2 text-sm' >Mark as Failed </button>
        </div>
      </div>
      
  )
}

export default AcceptTask
