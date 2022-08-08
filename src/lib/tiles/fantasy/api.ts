import axios from "axios";

import type { FantasyLeague } from "./models";


export async function getFantasyLeague(): Promise<FantasyLeague> {
  const res = await axios.get<FantasyLeague>(
    `https://presence-itera-fredrikstad.azurewebsites.net/api/fpl`
  );

  console.log(res.data)

  return res.data
}