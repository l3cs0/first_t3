import { useState } from "react";

export const InputForm = () => {
  const [price, setPrice] = useState("");
  const [tip, setTip] = useState("");

  const handleNewEntry = (p: string, t: string) => {
    console.log(`price: ${p}, tip: ${t}`);
    // api.entries.addEntry.useMutation().mutate({ price: price, tip: tip });
  };

  return (
    <div className="grid grid-cols-3 gap-1 pb-4">
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
        type="button"
        className="rounded-lg bg-yellow-500 px-1 py-1 text-center align-middle text-black sm:max-w-xs"
        onClick={() => {
          handleNewEntry(price, tip);
        }}
      >
        Speichern
      </button>
    </div>
  );
};
