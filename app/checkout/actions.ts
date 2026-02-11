"use server";

import { Product } from "../models/product";
import { PaymentMethodsEnum } from "./contexts/CheckoutContext";

export async function getProducs(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Curso de Marketing Digital 2025",
          originalPrice: 497.0,
          currentPrice: 297.0,
          producer: "João Silva",
          format: "digital",
          deliveryTime: "imediato",
        },
      ]);
    }, 1000);
  });
}

interface InPaymentAction {
  paymentMethod: PaymentMethodsEnum;
  productValue: number;
  installments: number;
  cpf: string;
  email: string;
}

export async function submit(_: InPaymentAction) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
