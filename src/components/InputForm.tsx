import { NumberInput } from "@mui/base/Unstable_NumberInput/NumberInput";
import { type ChangeEvent, useState } from "react";
// import { set } from "zod";
// import { api } from "~/utils/api";

export const InputForm = () => {
  const handleNewEntry = (price: number, tip: number) => {
    // api.entries.addEntry.useMutation().mutate({ price: price, tip: tip });

    setPriceAndTip(0, 0);
  };

  const [price, setPrice] = useState(0);
  const [tip, setTip] = useState(0);

  const setPriceAndTip = (price?: number, tip?: number) => {
    if (typeof price === "number" && price >= 0) {
      setPrice(price);
    }
    if (typeof tip === "number" && tip >= 0) {
      setTip(tip);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-1 pb-4">
      <NumberInput
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle
        text-white sm:max-w-xs"
        tabIndex={1}
        onChange={(e, value) => setPriceAndTip(value)}
      />
      <NumberInput
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs"
        tabIndex={2}
        placeholder="Trinkgeld"
        onChange={(e, value) => setPriceAndTip(undefined, value)}
      />
      <button
        type="button"
        className="rounded-lg bg-yellow-500 px-1 py-1 text-center align-middle text-black sm:max-w-xs"
        onClick={() => {
          handleNewEntry(1, 0);
        }}
      >
        Speichern
      </button>
    </div>
  );
};
