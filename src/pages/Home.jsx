import { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout'
import AuthContext from '../services/AuthContext'
import { db } from '../services/firebase'
import { onSnapshot, doc, setDoc } from 'firebase/firestore'
import Todo from '../components/Todo'
import { nanoid } from 'nanoid'

export default function Home() {
  const authCtx = useContext(AuthContext)
  const [data, setData] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  useEffect(
    () =>
      onSnapshot(doc(db, 'users', authCtx.user.uid), (snapshot) => {
        const data = snapshot.data()
        setData(data)
      }),
    []
  )

  const updateChecked = async (id) => {
    const ref = doc(db, 'users', authCtx.user.uid)
    const newTodos = data.todos
    newTodos[id] = {
      ...data.todos[id],
      completed: !data.todos[id].completed,
    }
    await setDoc(ref, {
      ...data,
      todos: newTodos,
    })
  }
  const deleteTodos = async (id) => {
    const ref = doc(db, 'users', authCtx.user.uid)
    const newTodos = data.todos
    delete newTodos[id]
    await setDoc(ref, {
      ...data,
      todos: newTodos,
    })
  }

  const addTodo = async (title) => {
    const ref = doc(db, 'users', authCtx.user.uid)
    const newTodos = data.todos
    newTodos[nanoid()] = {
      title: title,
      completed: false,
    }
    await setDoc(ref, {
      ...data,
      todos: newTodos,
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    await addTodo(newTodo)
    setNewTodo('')
  }
  return (
    <Layout>
      <div className='wrapper'>
        <h2 className='welcome-title'>
          Bonjour <span>{authCtx.user.displayName}</span>,
        </h2>
        <form onSubmit={submitForm}>
          <input
            type={'text'}
            name='new_todo'
            id='new_todo'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder='Nom de votre todo'
          />
          <input type={'submit'} value={'Ajouter'} />
        </form>
        <ul className='todos_container'>
          {data?.todos &&
            Object.keys(data.todos).map((key) => (
              <Todo
                deleteTodos={() => deleteTodos(key)}
                toggleCompleted={() => {
                  updateChecked(key)
                }}
                key={key}
                todo={data.todos[key]}
              />
            ))}
        </ul>
      </div>
    </Layout>
  )
}
