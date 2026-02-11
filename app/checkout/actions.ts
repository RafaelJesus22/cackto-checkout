"use server";

import { Product } from "../models/product";

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

export async function submit() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
