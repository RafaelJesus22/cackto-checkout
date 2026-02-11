import { CheckoutTotals, InPayment, PaymentStrategy } from "..";

export class CreditCardPaymentMethod implements PaymentStrategy {
  private oneInstallmentFee = 0.0399;
  private twoOrMoreInstallmenstFee = 0.0499;
  private feeForInstallment = 0.02;

  calculateTotals({ totalValue, installments }: InPayment): CheckoutTotals {
    if (installments === 1) {
      const totalFee = totalValue * this.oneInstallmentFee;

      return {
        buyerFee: 0,
        caktoFee: totalFee,
        productorFee: totalFee,
        productorLiquid: totalValue - totalFee,
        totalValue,
      };
    }

    const byuerFeePercentage = (installments - 1) * this.feeForInstallment;
    const buyerFee = totalValue * byuerFeePercentage;

    const productorFee = totalValue * this.twoOrMoreInstallmenstFee;

    const caktoFee = productorFee + buyerFee;

    return {
      buyerFee,
      caktoFee,
      productorFee,
      productorLiquid: totalValue - productorFee,
      totalValue: totalValue + buyerFee,
    };
  }
}
