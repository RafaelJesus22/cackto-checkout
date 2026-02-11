"use client";

import { useState } from "react";
import { submit } from "../../actions";

export default function Submit() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleClick() {
    setIsLoading(true);
    try {
      await submit();
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
