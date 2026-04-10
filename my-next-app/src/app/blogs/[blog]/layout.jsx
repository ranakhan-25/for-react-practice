import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
  return (
    <div className='flex'>
      <ul className='bg-blue-200 w-50'>
        <li><Link href={`/`}>All</Link></li>
        <li><Link href={`/`}>Total</Link></li>
        <li><Link href={`/`}>all</Link></li>
      </ul>
      {children}
    </div>
  )
}

export default layout