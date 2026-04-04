import React, { useState } from 'react'

const useTheme = (initial) => {
  const [theme, setTheme] = useState(initial);
  const black = () => setTheme(true)
  const white = () => setTheme(false)
  const toggle = () => setTheme(!theme)
  return [theme,black,white,toggle]
}

export default useTheme