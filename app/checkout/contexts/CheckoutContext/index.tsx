import { useContext, createContext } from "react";

interface CheckoutContextProps {}

const CheckoutContext = createContext({} as CheckoutContextProps);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <CheckoutContext.Provider value={{}}>{children}</CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }

  return context;
}
