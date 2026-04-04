import React, { useState } from 'react'

const useFrom = (initial) => {
  const [value, setValue] = useState(initial);

  const handelChange = (e) => {
    setValue(e.target.value)
  }
  return [value,handelChange]
}

export default useFrom