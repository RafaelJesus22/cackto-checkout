import { Product } from "@/app/models/product";
import { useContext, createContext, useState } from "react";

interface CheckoutContextProps {
  product: Product;
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

  return (
    <CheckoutContext.Provider value={{ product }}>
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
