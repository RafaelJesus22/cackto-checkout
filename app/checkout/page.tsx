import { Suspense } from "react";
import { getProducs } from "./actions";
import CheckoutClient from "./components/CheckoutClient";

export default async function CheckoutPage() {
  const [product] = await getProducs();

  return (
    <Suspense fallback={<p>Carregando</p>}>
      <CheckoutClient product={product} />
    </Suspense>
  );
}
