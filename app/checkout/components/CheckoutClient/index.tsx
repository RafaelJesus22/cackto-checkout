"use client";

import { Product } from "@/app/models/product";
import { CheckoutProvider } from "../../contexts/CheckoutContext";

import ProductDetails from "../ProductDetails";
import UserForm from "../UserForm";

export default function CheckoutClient({ product }: { product: Product }) {
  return (
    <CheckoutProvider initialProduct={product}>
      <main className="my-0 mx-auto max-w-lg">
        <ProductDetails />
        <UserForm />
      </main>
    </CheckoutProvider>
  );
}
