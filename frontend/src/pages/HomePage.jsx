import React, { useEffect } from 'react'
import { setThemeToLocalStorage } from '../utils/func'

export default function HomePage() {
    useEffect(()=>{
      setThemeToLocalStorage()
    },[])
  return (
    <div className=''>HomePage</div>
  )
}
