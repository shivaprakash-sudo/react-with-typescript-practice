import { IPerson } from "./IPerson";

export interface ISetPeople {
    people: IPerson["people"];
    setPeople: React.Dispatch<
        React.SetStateAction<
            {
                name: string;
                age: number;
                url: string;
                note?: string | undefined;
            }[]
        >
    >;
}