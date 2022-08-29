import axios from "axios";
import { add, addDays, parse, parseJSON } from "date-fns";

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
    .filter((e) => e.start > new Date(new Date(today).setHours(0)) && e.end < addDays(today, 7));
}

export async function isBeerToday() {
  const result = await axios.get<TeamEventDto[]>(
    "https://presence-itera-fredrikstad.azurewebsites.net/api/teamEvents"
  );
  
  const beerTriggers = ["pils", "fest", "øl"];

  function isBeerEvent(eventName: string) {
    return beerTriggers.filter((t) => eventName.toLowerCase().includes(t)).length > 0;
  }

  const today = new Date();

  return result.data
    .map((e) => ({
      name: e.name,
      start: parseJSON(e.start),
    }))
    .filter(e => new Date(e.start).toDateString() === today.toDateString())
    .some((e) => isBeerEvent(e.name));
} 