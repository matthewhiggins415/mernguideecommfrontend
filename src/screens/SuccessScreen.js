import React, { useEffect } from 'react'
import { success } from '../api/stripe'

const SuccessScreen = () => {

  useEffect(()=> {
    const path = window.location.pathname
    const query = window.location.search
    const url = path + query

    success(url)
  }, [])

  return (
    <div>SuccessScreen</div>
  )
}

export default SuccessScreen