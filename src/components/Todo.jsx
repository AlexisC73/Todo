export default function Todo({ todo, toggleCompleted, deleteTodos }) {
  return (
    <li className='todo'>
      <input
        onChange={toggleCompleted}
        type={'checkbox'}
        checked={todo.completed}
      />
      <h3>{todo.title}</h3>
      <button onClick={deleteTodos}>X</button>
    </li>
  )
}
