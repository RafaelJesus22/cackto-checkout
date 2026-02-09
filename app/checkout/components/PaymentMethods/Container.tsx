export default function PaymentMethodsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white rounded p-4 m-4 shadow flex flex-col gap-2">
      <h1 className="text-xl font-bold mb-4 text-stone-700">Pagamento</h1>
      {children}
    </main>
  );
}
