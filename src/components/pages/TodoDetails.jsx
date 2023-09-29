import ToDo from 'components/ToDo/ToDo';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
  const [todoList, setTodoList] = useState(null);
  const params = useParams();

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');

    if (localTodo) return setTodoList(JSON.parse(localTodo));
  }, []);

  return (
    <>
      {todoList?.map(
        todo => todo.id === params.id && <ToDo key={todo.id} todo={todo}></ToDo>
      )}
    </>
  );
};

export default TodoDetails;
