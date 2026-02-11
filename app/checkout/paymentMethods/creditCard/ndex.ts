import { CheckoutTotals, InPayment, PaymentStrategy } from "..";

export class CreditCardPaymentMethod implements PaymentStrategy {
  private oneInstallmentFee = 0.0399;
  private twoOrMoreInstallmenstFee = 0.0499;
  private feeForInstallment = 0.02;

  calculateTotals({ totalValue, installments }: InPayment): CheckoutTotals {
    /*
      Regras de taxa para pagamento com pix:
      - 1 parcela:
        - Corbrar 3.99 de taxa
      - 2 ou mais parcelas:
        - Cobrar taxa 4.99% de taxa + 2% de taxa por parcela
        - O produtor paga a taxa de 4.99%

        - O comprador paga o restante da taxa
    */

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
      productorLiquid: totalValue,
      totalValue,
    };
  }
}
