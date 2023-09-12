type entryProps = {
  price: number;
  tip: number;
  dateTime?: Date;
};

export const Entry = (props: entryProps) => {
  const { price, tip, dateTime } = props;

  const formatedDate = dateTime?.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="grid grid-cols-3 gap-1 pb-1">
      <div className="flex flex-col justify-center rounded-lg bg-black/60 text-center text-white">
        {price}
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-black/60 text-center text-white">
        {tip}
      </div>
      <div className="flex flex-col justify-center rounded-lg bg-black/60 p-1 text-center text-xs text-white sm:max-w-xs">
        {formatedDate}
      </div>
    </div>
  );
};
