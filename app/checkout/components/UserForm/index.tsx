"use client";

import { InputMask } from "@react-input/mask";

export default function UserForm() {
  return (
    <div className="m-4 p-4 bg-white rounded shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block text-stone-700">
          Nome
        </label>
        <InputMask
          type="text"
          id="name"
          className="border rounded-lg w-full border-stone-400 p-2"
          mask="___.___.___-__"
          placeholder="___.___.___-__"
          replacement={{ _: /\d/ }}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-stone-700">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="seu.email@provedor.com"
          className="border rounded-lg w-full border-stone-400 p-2"
        />
      </div>
    </div>
  );
}
