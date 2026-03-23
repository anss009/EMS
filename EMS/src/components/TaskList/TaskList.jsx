import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] w-full overflow-x-auto flex items-center justify-self-start  gap-5 flex-nowrap  mt-10 '>
      <div className=' h-full flex-shrink-0  w-[300px] bg-red-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
          <h4 className='text-sm'>23 march 2026</h4>
        </div>
        <div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, commodi reprehenderit molestiae totam labore.
          </p>
        </div>
      </div>
      <div className=' h-full flex-shrink-0  w-[300px] bg-cyan-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
          <h4 className='text-sm'>23 march 2026</h4>
        </div>
        <div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, commodi reprehenderit molestiae totam labore.
          </p>
        </div>
      </div>
      <div className=' h-full flex-shrink-0  w-[300px] bg-purple-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
          <h4 className='text-sm'>23 march 2026</h4>
        </div>
        <div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, commodi reprehenderit molestiae totam labore.
          </p>
        </div>
      </div>
      <div className=' h-full flex-shrink-0  w-[300px] bg-orange-400 p-5 rounded-xl'>
        <div className=' flex justify-between items-center '>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm '>High</h3>
          <h4 className='text-sm'>23 march 2026</h4>
        </div>
        <div>
          <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
          <p className='text-sm mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, commodi reprehenderit molestiae totam labore.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TaskList
