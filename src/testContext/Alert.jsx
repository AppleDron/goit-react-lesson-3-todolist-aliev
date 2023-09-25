import React from 'react';
import { useCustonContext } from './Context/Context';

const Alert = () => {
  const context = useCustonContext();
  console.log(context);
  return (
    context.toggleValue && <div className="alert alert-danger">Message</div>
  );
};

export default Alert;
