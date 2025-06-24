import React from 'react'

function PullUp() {
  return (
    <div className='absolute flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <label htmlFor="pull-ups">Pull-ups</label>
      <input id="pull-ups" className='border shadow-md p-[10px] h-[35px] w-[calc(170px+1.5vw)] mb-[10%]' type="number" placeholder="number of pull-ups" />
        <label htmlFor="push-ups">Push-ups</label>
      <input id="push-ups" className='border shadow-md p-[10px] h-[35px] w-[calc(170px+1.5vw)]' type="number" placeholder="number of push-ups" />
    </div>
  )
}

export default PullUp
