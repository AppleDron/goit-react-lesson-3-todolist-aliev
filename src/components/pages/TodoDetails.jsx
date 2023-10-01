import ToDo from 'components/ToDo/ToDo';
import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const TodoDetails = () => {
  const [todoList, setTodoList] = useState(null);
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');

    if (localTodo) return setTodoList(JSON.parse(localTodo));
  }, []);

  return (
    <Suspense>
      <Link to={location.state} className="btn btn-primary m-2">
        Back
      </Link>
      {todoList?.map(
        todo => todo.id === params.id && <ToDo key={todo.id} todo={todo}></ToDo>
      )}
    </Suspense>
  );
};

export default TodoDetails;
