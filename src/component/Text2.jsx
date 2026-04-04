import React, { use } from 'react'
import { Link } from 'react-router'

const Text2 = ({users2}) => {
  const users = use(users2)
  return (
    <div className=' flex flex-col overflow-auto bg-purple-500 justify-center'>
      
      {users.map(user => <div key={user.id}>
        <h1>{user.name}</h1>
        <Link to={`${user.id}`}>Show Datalist</Link>
      </div>)}

      <h2 className='mt-10 '>this is text 2 here</h2>
    </div>
  )
}

export default Text2