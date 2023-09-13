import { api } from "~/utils/api";
import { Entry } from "./Entry";
import { Button } from "@mui/base";

type EntriesType =
  | {
      id: string;
      createdAt: Date;
      authorId: string;
      price: number;
      tip: number;
      comment: string;
    }[]
  | undefined;

type EntryListProps = {
  entries: EntriesType;
  isLoading: boolean;
  isError: boolean;
};

export const EntryList = (Props: EntryListProps) => {
  const { entries, isLoading, isError } = Props;

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (!entries) return <h1>No entries</h1>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-1 pb-1">
        <div className="flex flex-col justify-center rounded-lg bg-black/60 text-center text-white">
          {"Preis"}
        </div>
        <div className="flex flex-col justify-center rounded-lg bg-black/60 text-center text-white">
          {"Trinkgeld"}
        </div>
      </div>
      {entries.map((entry) => (
        <Entry key={entry.id} dateTime={entry.createdAt} {...entry} />
      ))}
    </div>
  );
};
