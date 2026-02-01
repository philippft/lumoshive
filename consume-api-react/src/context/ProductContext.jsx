import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    mode: "info",
    title: "",
    message: "",
    onConfirm: null,
  });

  return (
    <ProductContext.Provider
      value={{ 
        modalConfig, 
        setModalConfig,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
