import { formatCurrency } from "@/utils/currency";
import { useCheckout } from "../../contexts/CheckoutContext";

export default function ProductDetailsIndex() {
  const { product } = useCheckout();

  return (
    <div className="p-4 bg-white shadow rounded m-4">
      <h1 className="font-bold">{product.name}</h1>
      <div>
        <p className="text-stone-500">
          De {formatCurrency(product.originalPrice)} por{" "}
          <strong className="text-black">
            {formatCurrency(product.currentPrice)}
          </strong>
        </p>
      </div>
    </div>
  );
}
