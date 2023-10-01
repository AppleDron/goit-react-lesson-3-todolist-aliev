import React, { useState } from 'react';

const FormFilterTodo = ({ setSearchParams, filteredText }) => {
  const [filter, setFilter] = useState('');

  const handleChangeInput = ({ target }) => {
    setFilter(target.value);
    setSearchParams({ filter: target.value });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInput" className="form-label">
          Filter:
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInput"
          onChange={handleChangeInput}
          value={filteredText}
        />
      </div>
    </form>
  );
};

export default FormFilterTodo;
