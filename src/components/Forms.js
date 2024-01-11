import React from 'react'

function Forms() {
  return (
    <form action="" className='flex flex-col mx-[300px]'>
        <input type="text" placeholder='Lat' className='h-12 my-9 rounded bg-[#B1CACA]'/>
        <input type="text" placeholder='Lon' className='h-12 rounded bg-[#B1CACA]'/>
        <button className='bg-white p-3 rounded-full my-5 text-[#F21D1D] font-bold'>Search</button>
    </form>
  )
}

export default Forms