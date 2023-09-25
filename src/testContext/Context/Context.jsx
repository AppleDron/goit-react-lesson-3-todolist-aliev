import React, { useContext, useState } from 'react';

export const ContextAlert = React.createContext();

export const useCustonContext = () => useContext(ContextAlert);

const Context = ({ children }) => {
  const [toggleAlert, settoggleAlert] = useState(false);

  return (
    <ContextAlert.Provider
      value={{ toggleValue: toggleAlert, toggle: settoggleAlert }}
    >
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
