type entryProps = {
  price: number;
  tip: number;
  dateTime?: Date;
};

export const Entry = (props: entryProps) => {
  const { price, tip, dateTime } = props;

  const day = dateTime?.getDay();
  const month = dateTime?.getMonth();
  const hour = dateTime?.getHours();
  const minute = dateTime?.getMinutes();

  const formatedDate = `${day}.${month} ${hour}:${minute}`;
  return (
    <div className="grid grid-cols-3 gap-1 pb-1">
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        {price}
      </div>
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        {tip}
      </div>
      <div className="rounded-lg bg-black/60 px-1 py-1 text-center align-middle text-white sm:max-w-xs">
        {formatedDate}
      </div>
    </div>
  );
};
