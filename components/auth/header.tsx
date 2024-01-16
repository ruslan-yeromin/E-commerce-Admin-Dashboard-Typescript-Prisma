import React from 'react'

interface HeaderProps {
    label: string;
}

const Header = ({label}: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
        <h1 className='text-3xl text-gray-800 font-semibold'>Authjs.dev</h1>
        <p className='text-gray-500 text-sm'>{label}</p>
    </div>
  )
}

export default Header