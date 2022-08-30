import axios from "axios";
import { formatISO } from "date-fns";
import type { DayAtWork, DaySummary, DayAtWorkType } from "./models";

export async function getDayAtWorkItems(day: Date): Promise<DayAtWork[]> {
  const date = formatISO(day, { representation: "date" });
  const res = await axios.get<DaySummary>(
    `https://services.itera.fredrikstad.dev/api/daySummary?date=${date}`
  );

  return res.data.attendees.filter((attendee) => attendee.type !== "EMPTY");
}
