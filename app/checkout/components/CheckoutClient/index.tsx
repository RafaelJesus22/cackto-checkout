"use client";

import { Product } from "@/app/models/product";
import { CheckoutProvider } from "../../contexts/CheckoutContext";

export default function CheckoutClient({ product }: { product: Product }) {
  return (
    <CheckoutProvider initialProduct={product}>
      <main className="my-0 mx-auto max-w-lg">
        <h1>Checkout</h1>
      </main>
    </CheckoutProvider>
  );
}
