import React, { createContext, PropsWithChildren, useState } from "react";

import { getPreparedData } from "./data";
import { Product } from "./interfaces";

export const initialState = getPreparedData();

export const Store = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState(initialState);

  return (
    <GlobalContext.Provider value={[products, setProducts]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext([initialState, null as any] as [
  Product[],
  React.Dispatch<React.SetStateAction<Product[]>>
]);
