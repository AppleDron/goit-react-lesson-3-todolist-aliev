import ToDoList from 'components/ToDoList/ToDoList';
import React, { Suspense } from 'react';

const TodoPage = () => {
  return (
    <Suspense>
      <div>
        TodoPage
        <ToDoList />
      </div>
    </Suspense>
  );
};

export default TodoPage;
