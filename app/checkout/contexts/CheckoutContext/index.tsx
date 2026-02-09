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
  installments: number;
  setUserData: (userData: UserData) => void;
  setInstallments: (installments: number) => void;
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
  const [installments, setInstallments] = useState(1);

  // Deixei pix pré-selecionado para sugestionar ao usuário a usar o pix
  const [paymentMethod, _setPaymentMethod] = useState(PaymentMethodsEnum.PIX);

  const clearUserFormError = (field: keyof UserData) => {
    setUserDataFormErrors((prev) => ({ ...prev, [field]: "" }));
  };

  function setPaymentMethod(paymentMethod: PaymentMethodsEnum) {
    _setPaymentMethod(paymentMethod);
    setInstallments(1);
  }

  return (
    <CheckoutContext.Provider
      value={{
        product,
        userData,
        userDataFormErrors,
        paymentMethod,
        installments,
        setUserData,
        clearUserFormError,
        setPaymentMethod,
        setInstallments,
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
