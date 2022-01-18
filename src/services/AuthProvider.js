import { useState } from 'react'
import AuthContext from './AuthContext'
import Signin from '../components/GoogleButton/Signin'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const defaultAuth = {
    user,
    setUser,
  }

  if (!user) {
    return (
      <header>
        <Signin setUser={setUser} />
      </header>
    )
  }
  return (
    <AuthContext.Provider value={defaultAuth}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
