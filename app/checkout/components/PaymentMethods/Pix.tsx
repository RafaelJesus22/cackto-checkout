import { useState, useEffect } from "react";
import {
  PaymentMethodsEnum,
  useCheckout,
} from "../../contexts/CheckoutContext";

export default function PaymentMethodsPix() {
  const labels = ["APROVAÇÃO IMEDIATA", "TAXA 0%"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const { paymentMethod, setPaymentMethod } = useCheckout();

  const isSelected = paymentMethod === PaymentMethodsEnum.PIX;

  function handleSelectPaymentMethod() {
    setPaymentMethod(PaymentMethodsEnum.PIX);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedIndex((prev) => (prev + 1) % labels.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={handleSelectPaymentMethod}
      className={`
        cursor-pointer p-4 rounded-lg border transition-all hover:border-green-600 hover:bg-green-50 hover:scale-105
        ${isSelected && "border-2 border-green-600 bg-green-50 text-green-800 font-bold"}
      `}
    >
      <h1>
        PIX -{" "}
        <span
          className={`transition-all duration-400 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        >
          {labels[selectedIndex]}
        </span>
      </h1>
    </div>
  );
}
