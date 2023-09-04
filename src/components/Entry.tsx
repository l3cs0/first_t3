type entryProps = {
  price: number;
  tip: number;
  comment?: string;
};

export default function Entry(props: entryProps) {
  const { price, tip, comment } = props;
  return (
    <div className="grid grid-cols-4 gap-1 pb-1">
      <div className="rounded-lg bg-black/60 px-4 py-1 text-center align-middle text-white sm:max-w-xs">
        {price}
      </div>
      <div className="rounded-lg bg-black/60 px-4 py-1 text-center align-middle text-white sm:max-w-xs">
        {tip}
      </div>
      <div className="rounded-lg bg-black/60 px-4 py-1 text-center align-middle text-white sm:max-w-xs">
        {comment}
      </div>
      <div className="rounded-lg bg-black/60 px-4 py-1 text-center align-middle text-white sm:max-w-xs">
        dateTime
      </div>
    </div>
  );
}
