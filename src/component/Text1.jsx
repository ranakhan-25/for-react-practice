import React from 'react'
import { useLoaderData } from 'react-router'

const Text1 = () => {
  const users = useLoaderData()
  console.log(users)
  return (
    <div className='h-30 flex items-center bg-pink-400 justify-center'>
      <h1>hello i am text 1 here </h1>
    </div>
  )
}

export default Text1