import { useState } from "react";
import { api } from "~/utils/api";

export const InputForm = () => {
  const [price, setPrice] = useState("");
  const [tip, setTip] = useState("");
  const trpcUtils = api.useContext();
  const createEntry = api.entries.create.useMutation({
    onSuccess: async (newEntry) => {
      console.log(`New entry created: ${newEntry.id}`);
      await trpcUtils.invalidate();
      setPrice("");
      setTip("");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createEntry.mutate({ price: price, tip: tip, email: "" });
  };

  return (
    <form className="grid grid-cols-3 gap-1 pb-4" onSubmit={handleSubmit}>
      <input
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs"
        autoFocus
        type="text"
        inputMode="numeric"
        tabIndex={1}
        value={price}
        pattern="\d+(.\d{1})?"
        placeholder="Preis"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <input
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs"
        autoFocus
        value={tip}
        type="text"
        inputMode="numeric"
        tabIndex={1}
        pattern="\d+(.\d{1})?"
        placeholder="Trinkgeld"
        onChange={(e) => {
          setTip(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-lg bg-yellow-500 px-1 py-1 text-center align-middle text-black sm:max-w-xs"
      >
        Speichern
      </button>
    </form>
  );
};
