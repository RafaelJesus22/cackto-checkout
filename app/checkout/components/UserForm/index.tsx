"use client";

import { InputMask } from "@react-input/mask";
import { useCheckout } from "../../contexts/CheckoutContext";

export default function UserForm() {
  const { setUserData, userDataFormErrors, clearUserFormError, userData } =
    useCheckout();

  return (
    <div className="m-4 p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label
          htmlFor="cpf"
          className={`block ${userDataFormErrors.cpf ? "text-red-400" : "text-stone-700"}`}
        >
          CPF
        </label>
        <InputMask
          type="text"
          id="cpf"
          className={`border rounded-lg w-full p-2 ${userDataFormErrors.cpf ? "border-red-400" : "border-stone-400"}`}
          mask="___.___.___-__"
          placeholder="___.___.___-__"
          replacement={{ _: /\d/ }}
          onChange={(e) => {
            clearUserFormError("cpf");
            setUserData({ ...userData, cpf: e.target.value });
          }}
        />
        {userDataFormErrors.cpf ? (
          <span className="text-red-500 block mt-2">
            {userDataFormErrors.cpf}
          </span>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className={`block ${userDataFormErrors.email ? "text-red-400" : "text-stone-700"}`}
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="seu.email@provedor.com"
          className={`border rounded-lg w-full p-2 ${userDataFormErrors.email ? "border-red-400" : "border-stone-400"}`}
          onChange={(e) => {
            clearUserFormError("email");
            setUserData({ ...userData, email: e.target.value });
          }}
        />
        {userDataFormErrors.email ? (
          <span className="text-red-500 block mt-2">
            {userDataFormErrors.email}
          </span>
        ) : null}
      </div>
    </div>
  );
}
