import { formatCurrency } from "@/utils/currency";
import {
  PaymentMethodsEnum,
  useCheckout,
} from "../../contexts/CheckoutContext";
import { PixPaymentStrategy } from "../../paymentMethods/pix";

export default function Summary() {
  const { product, checkoutTotals, paymentMethod, setPaymentMethod } =
    useCheckout();

  function handleSelectPix() {
    setPaymentMethod(PaymentMethodsEnum.PIX);
  }

  const pixSavings = PixPaymentStrategy.getSavingsWithPix(
    checkoutTotals.totalValue,
    product.currentPrice,
  );

  return (
    <div className="bg-white p-4 m-4 rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-stone-700">Resumo</h1>

      <div className="flex flex-col gap-1 mb-2">
        <div className="flex items-center justify-between gap-4">
          <p>Produto</p>
          <p>
            <strong>{formatCurrency(product.currentPrice)}</strong>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>Taxa Cakto</p>
          <p>
            <strong>{formatCurrency(checkoutTotals.caktoFee)}</strong>
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>{formatCurrency(checkoutTotals.totalValue)}</strong>
          </p>
        </div>
      </div>
      <div className="border-t border-stone-300 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-4 mt-2">
          <p className="text-green-700 font-bold">{product.producer} recebe</p>
          <p className="text-green-700 font-bold">
            {formatCurrency(checkoutTotals.productorLiquid)}
          </p>
        </div>
        {paymentMethod !== PaymentMethodsEnum.PIX ? (
          <div>
            {pixSavings ? (
              <p>
                Pagando com PIX você economizaria{" "}
                {formatCurrency(
                  PixPaymentStrategy.getSavingsWithPix(
                    checkoutTotals.totalValue,
                    product.currentPrice,
                  ),
                )}
              </p>
            ) : (
              <p>Pagando com PIX a aprovação é instântanea</p>
            )}
            <input
              type="button"
              value="Pagar com Pix"
              className="p-4 rounded-lg bg-green-700 text-teal-50 mt-4"
              onClick={handleSelectPix}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
