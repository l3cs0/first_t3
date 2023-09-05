type entryProps = {
  price: number;
  tip: number;
  comment?: string;
};

export const Entry = (props: entryProps) => {
  const { price, tip, comment } = props;
  return (
    <div className="grid grid-cols-3 gap-1 pb-1">
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        {price}
      </div>
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        {tip}
      </div>
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        dateTime
      </div>
    </div>
  );
};
