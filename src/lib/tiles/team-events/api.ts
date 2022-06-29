import axios from "axios";
import { addDays, parse, parseJSON } from "date-fns";

type TeamEventDto = {
  name: string;
  start: string;
  end: string;
};

type TeamEvent = {
  name: string;
  start: Date;
  end: Date;
};

export async function getTeamEvents(today: Date): Promise<TeamEvent[]> {
  const result = await axios.get<TeamEventDto[]>(
    "https://presence-itera-fredrikstad.azurewebsites.net/api/teamEvents"
  );
  
  return result.data
    .map((e) => ({
      name: e.name,
      start: parseJSON(e.start),
      end: parseJSON(e.end),
    }))
    .filter((e) => e.start > today && e.end < addDays(today, 7));
}
