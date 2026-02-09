"use client";

import { Product } from "@/app/models/product";
import { CheckoutProvider } from "../../contexts/CheckoutContext";

import ProductDetails from "../ProductDetails";
import UserForm from "../UserForm";
import * as PaymentMethods from "../PaymentMethods";
import Summary from "../Summary";

export default function CheckoutClient({ product }: { product: Product }) {
  return (
    <CheckoutProvider initialProduct={product}>
      <main className="my-0 mx-auto max-w-lg">
        <ProductDetails />
        <UserForm />
        <PaymentMethods.Container>
          <PaymentMethods.Pix />
          <PaymentMethods.CreditCard />
        </PaymentMethods.Container>
        <Summary />
      </main>
    </CheckoutProvider>
  );
}
