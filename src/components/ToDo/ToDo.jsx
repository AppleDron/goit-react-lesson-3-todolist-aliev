import { Link } from 'react-router-dom';

const ToDo = ({ todo, todoCheckCompleted, handleDelete }) => {
  return (
    <li className="list-group-item">
      <div className="row justify-content-between">
        <div className="col-10">
          {todoCheckCompleted && (
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={() => todoCheckCompleted(todo.id)}
            />
          )}
          <Link to={todo.id}>{todo.title}</Link>
        </div>
        <div className="col">
          {todoCheckCompleted && (
            <button
              disabled={!todo.completed}
              className="btn-close"
              type="button"
              aria-label="Close"
              onClick={() => handleDelete(todo.id)}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ToDo;
