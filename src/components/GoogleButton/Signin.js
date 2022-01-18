import { authentication, db } from '../../services/firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'

export default function Signin({ setUser }) {
  const provider = new GoogleAuthProvider()
  const signInWithGoogle = () => {
    signInWithPopup(authentication, provider)
      .then(async (re) => {
        const ref = doc(db, 'users', re.user.uid)
        const data = await getDoc(ref)
        if (!data.data()) {
          const ref = doc(db, 'users', re.user.uid)
          await setDoc(ref, {
            todos: {},
          })
        }
        setUser(re.user)
      })
      .catch((err) => console.log(err))
  }
  return <button onClick={signInWithGoogle}>Sign In with Google</button>
}
