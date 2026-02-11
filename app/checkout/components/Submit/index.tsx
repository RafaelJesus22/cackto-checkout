import { useState } from "react";
import { z } from "zod";

import { submit } from "@/app/checkout/actions";
import { useCheckout } from "@/app/checkout/contexts/CheckoutContext";
import { validateCPF } from "@/app/checkout/utils/validators/cpf";

export default function Submit() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    userData,
    setUserDataFormErrors,
    installments,
    paymentMethod,
    product,
  } = useCheckout();

  async function handleClick() {
    const isEmailValid = z.email().safeParse(userData.email).success;
    const isCpfValid = validateCPF(userData.cpf);

    setUserDataFormErrors({
      cpf: isCpfValid ? "" : "CPF inválido",
      email: isEmailValid ? "" : "E-mail inválido",
    });

    if (!isCpfValid || !isEmailValid) {
      return;
    }

    setIsLoading(true);

    try {
      await submit({
        cpf: userData.cpf,
        email: userData.cpf,
        installments,
        paymentMethod,
        productValue: product.currentPrice,
      });

      alert("Sua compra foi realizada com sucesso");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full p-4">
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`p-4 w-full rounded-lg bg-green-700 text-white font-bold ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isLoading ? "Carregando..." : "Finalizar Compra"}
      </button>
    </div>
  );
}
