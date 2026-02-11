import { CheckoutTotals, InPayment, PaymentStrategy } from "..";

export class PixPaymentStrategy implements PaymentStrategy {
  calculateTotals({ totalValue }: InPayment): CheckoutTotals {
    /*
      Regras de taxa para pagamento com pix:
      - 0% de taxas
    */
    return {
      buyerFee: 0,
      caktoFee: 0,
      productorFee: 0,
      productorLiquid: totalValue,
      totalValue,
    } as CheckoutTotals;
  }

  static getSavingsWithPix(currentPrice: number, productPrice: number) {
    return currentPrice - productPrice;
  }
}
