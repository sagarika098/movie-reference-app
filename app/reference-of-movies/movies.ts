import { Dates } from "./dates";
import { Results } from "./results";

export interface Movies {
    date: Dates,
    results: Results[],
    total_results: String,
}
