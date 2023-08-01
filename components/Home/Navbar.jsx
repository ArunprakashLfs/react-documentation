import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='m-4 flex justify-between items-center'>
        <div>
            <Image src="/images/streams.png" alt='streams-logo' height={50} width={80} className='h-[2rem] w-auto' />
        </div>
        <div>
            <button className='bg-green-600 text-white text-xl px-4 p-2 rounded-2xl'>Login</button>
            
        </div>
    </div>
  )
}

export default Navbar
