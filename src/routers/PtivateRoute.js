import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AuthContext } from '../auth/authContext'

export const PtivateRoute = ({children}) => {

const {user} = useContext(AuthContext)

  return user.logged ? children : <Navigate to='/login'/>
}
