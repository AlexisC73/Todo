import { signOut } from 'firebase/auth'
import { authentication } from '../../services/firebase'
import AuthContext from '../../services/AuthContext'
import { useContext } from 'react'

export default function Signout() {
  const authCtx = useContext(AuthContext)
  const signout = () => {
    signOut(authentication)
      .then((success) => authCtx.setUser(null))
      .catch((err) => console.log(err))
  }
  return <button onClick={signout}>Signout</button>
}
