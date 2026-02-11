import { PaymentMethodsEnum } from "../contexts/CheckoutContext";
import { CreditCardPaymentMethod } from "./creditCard";
import { PixPaymentStrategy } from "./pix";

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

const creditCardStrategy = new CreditCardPaymentMethod();
const pixStrategy = new PixPaymentStrategy();

export const paymentStrategies: Record<PaymentMethodsEnum, PaymentStrategy> = {
  PIX: pixStrategy,
  CREDIT_CARD: creditCardStrategy,
};
