import { Fragment } from "react/jsx-runtime";
import {
  PaymentMethodsEnum,
  useCheckout,
} from "../../contexts/CheckoutContext";

export default function PaymentMethodsCreditCard() {
  const { paymentMethod, setPaymentMethod, installments, setInstallments } =
    useCheckout();

  const isSelected = paymentMethod === PaymentMethodsEnum.CREDIT_CARD;

  function handleSelectPaymentMethod() {
    setPaymentMethod(PaymentMethodsEnum.CREDIT_CARD);
  }
  return (
    <Fragment>
      <div
        onClick={handleSelectPaymentMethod}
        className={`
        cursor-pointer p-4 rounded-lg border transition-all hover:border-green-600 hover:bg-green-50 flex items-center gap-4 outline-0
        ${isSelected && "border-green-500 bg-green-50 text-green-700 font-semibold hover:text-green-600"}
      `}
      >
        <h1>Cartão de crédito</h1>
        {isSelected && (
          <select
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()} // AI add this line
            className="outline-0"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}x
              </option>
            ))}
          </select>
        )}
      </div>
    </Fragment>
  );
}
