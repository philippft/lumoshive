import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    title: "",
    message: "",
    type: "",
  });

  return (
    <ProductContext.Provider
      value={{ 
        isModalOpen, 
        setIsModalOpen, 
        modalConfig, 
        setModalConfig,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
