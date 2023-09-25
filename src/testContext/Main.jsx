import React from 'react';
import { useCustonContext } from './Context/Context';

const Main = () => {
  const context = useCustonContext();

  return (
    <div>
      <h1>Hello Context</h1>
      <button
        className="btn-btn-success"
        onClick={() => context.toggle(!context.toggleValue)}
      >
        Open Alert
      </button>
    </div>
  );
};

export default Main;
