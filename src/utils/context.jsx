import { React, createContext, useState, useCallback } from "react";

const UseContext = createContext();

export function ProductContext({ children }) {
  const [item, setItem] = useState([]);

  const productItemSetter = useCallback(
    (title, amount) => {
      setItem((state) => [...state, { title, amount }]);
    },
    [item]
  );

  return (
    <UseContext.Provider value={{ item, productItemSetter }}>
      {children}
    </UseContext.Provider>
  );
}

export default UseContext;
