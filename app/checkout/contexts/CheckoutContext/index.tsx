import { Product } from "@/app/models/product";
import { useContext, createContext, useState } from "react";

export enum PaymentMethodsEnum {
  PIX = "PIX",
  CREDIT_CARD = "CREDIT_CARD",
}

interface UserData {
  email: string;
  cpf: string;
}

interface CheckoutContextProps {
  product: Product;
  userData: UserData;
  userDataFormErrors: UserData;
  paymentMethod: PaymentMethodsEnum;
  setUserData: (userData: UserData) => void;
  clearUserFormError: (field: keyof UserData) => void;
  setPaymentMethod: (paymentMethod: PaymentMethodsEnum) => void;
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
  const [userDataFormErrors, setUserDataFormErrors] = useState({} as UserData);

  // Deixei pix pré-selecionado para sugestionar ao usuário a usar o pix
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethodsEnum.PIX);

  const clearUserFormError = (field: keyof UserData) => {
    setUserDataFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <CheckoutContext.Provider
      value={{
        product,
        userData,
        userDataFormErrors,
        paymentMethod,
        setUserData,
        clearUserFormError,
        setPaymentMethod,
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
