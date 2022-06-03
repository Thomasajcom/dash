import axios from "axios";
import { formatISO } from "date-fns";
import type { DayAtWork, DaySummary } from "./models";


export async function getDayAtWorkItems(day: Date): Promise<DayAtWork[]> {
    const date = formatISO(day, {representation: "date"})
    const res = await axios
      .get<DaySummary>(`https://presence-itera-fredrikstad.azurewebsites.net/api/daySummary?date=${date}`);
  
  
    return res.data.attendees
  }