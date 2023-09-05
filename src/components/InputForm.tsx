export const InputForm = () => {
  return (
    <div className="grid grid-cols-3 gap-1 pb-4">
      <input
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs"
        autoFocus
        type="text"
        inputMode="numeric"
        tabIndex={1}
        value=""
        pattern="\d+(.\d{1})?"
        placeholder="Preis"
      />
      <input
        className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs"
        type="text"
        inputMode="numeric"
        tabIndex={2}
        pattern="\d+(.\d{1})?"
        placeholder="Trinkgeld"
      />
      <button
        type="button"
        className="rounded-lg bg-yellow-500 px-1 py-1 text-center align-middle text-black sm:max-w-xs"
      >
        Speichern
      </button>
    </div>
  );
};
