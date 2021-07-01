import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const Dashboard = () => {

  const { currentUser } = useAuth()
  
  return (
    <div>
      {currentUser.email}
    </div>
  )
}

export default Dashboard
