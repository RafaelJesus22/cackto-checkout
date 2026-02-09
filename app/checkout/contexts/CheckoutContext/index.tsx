import { Product } from "@/app/models/product";
import { useContext, createContext, useState } from "react";

interface UserData {
  email: string;
  cpf: string;
}

interface CheckoutContextProps {
  product: Product;
  userData: UserData;
  userDataFormErrors: UserData;
  setUserData: (userData: UserData) => void;
  clearUserFormError: (field: keyof UserData) => void;
}

const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutProvider({
  children,
  initialProduct,
}: {
  children: React.ReactNode;
  initialProduct: Product;
}) {
  const [product, setProduct] = useState(initialProduct);
  const [userData, setUserData] = useState({} as UserData);
  const [userDataFormErrors, setUserDataFormErrors] = useState({
    cpf: "CPF inválido",
  } as UserData);

  const clearUserFormError = (field: keyof UserData) => {
    setUserDataFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <CheckoutContext.Provider
      value={{
        product,
        setUserData,
        userData,
        userDataFormErrors,
        clearUserFormError,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }

  return context;
}
