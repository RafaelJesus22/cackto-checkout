import { PaymentMethodsEnum } from "../contexts/CheckoutContext";

export interface InPayment {
  totalValue: number;
  installments: number;
}

export interface CheckoutTotals {
  caktoFee: number; // Valor total cobrado pela cakto
  buyerFee: number; // Valor de taxa que o comprador pagará de taxa
  productorFee: number; // Valor de taxa que o VENDEDOR pagará de taxa
  totalValue: number; // Valor total a ser pago
  productorLiquid: number; // valor do produto - productorFee
}

export interface PaymentStrategy {
  calculateTotals: (data: InPayment) => CheckoutTotals;
}

const paymentMethods: Record<PaymentMethodsEnum, PaymentStrategy> = {
  [PaymentMethodsEnum.CREDIT_CARD]: {} as PaymentStrategy,
  [PaymentMethodsEnum.PIX]: {} as PaymentStrategy,
};
