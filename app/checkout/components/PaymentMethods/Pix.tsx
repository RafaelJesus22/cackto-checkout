import {
  PaymentMethodsEnum,
  useCheckout,
} from "../../contexts/CheckoutContext";

export default function PaymentMethodsPix() {
  const { paymentMethod, setPaymentMethod } = useCheckout();

  const isSelected = paymentMethod === PaymentMethodsEnum.PIX;

  const selectedStyles =
    "border-2 border-green-600 bg-green-50 text-green-800 font-bold";

  function handleSelectPaymentMethod() {
    setPaymentMethod(PaymentMethodsEnum.PIX);
  }

  return (
    <div
      onClick={handleSelectPaymentMethod}
      className={`cursor-pointer p-4 rounded-lg border transition-all hover:border-green-600 hover:bg-green-50 hover:scale-105" ${isSelected && selectedStyles}`}
    >
      <h1>PIX</h1>
    </div>
  );
}
