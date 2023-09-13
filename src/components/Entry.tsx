import { Button } from "@mui/base";
import type { entry } from "@prisma/client";
import { api } from "~/utils/api";

export const Entry = (props: entry) => {
  const { price, tip, createdAt, id } = props;
  const trpcUtils = api.useContext();

  const formatedDate = createdAt?.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const mutation = api.entries.delete.useMutation({
    onSuccess: async () => {
      await trpcUtils.invalidate();
    },
  });

  const deleteEntry = () => {
    mutation.mutate({ id: id });
  };

  return (
    <div className="flex gap-2 pb-1">
      <div className="grid grid-cols-3 gap-1">
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
      <Button
        onClick={() => deleteEntry()}
        className="rounded-lg  border-4 border-solid border-black"
      >
        X
      </Button>
    </div>
  );
};
