import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="each-item">
      <p className="description">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem