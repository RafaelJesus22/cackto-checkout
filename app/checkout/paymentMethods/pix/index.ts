import { CheckoutTotals, InPayment, PaymentStrategy } from "..";

export class PixPaymentStrategy implements PaymentStrategy {
  calculateTotals({ totalValue }: InPayment): CheckoutTotals {
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
