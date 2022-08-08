export type FantasyLeague = {
    new_entries: FantasyLeagueEntries
    league: FantasyLeagueLeague
    standings: FantasyLeagueStandings
}

export type FantasyLeagueEntries = {
    results: FantasyLeagueEntry[]
}

export type FantasyLeagueEntry = {
    entry: number,
    entry_name: string,
    player_first_name: string,
    player_last_name: string

}

export type FantasyLeagueLeague = {
    id: number,
    name: string
    // "league": {
    //     "id": 6765,
    //     "name": "Itera Fredrikstad",
    //     "created": "2022-07-05T15:34:21.923297Z",
    //     "closed": false,
    //     "max_entries": null,
    //     "league_type": "x",
    //     "scoring": "c",
    //     "admin_entry": 18703,
    //     "start_event": 1,
    //     "code_privacy": "p",
    //     "has_cup": true,
    //     "cup_league": null,
    //     "rank": null
    // },
}

export type FantasyLeagueStandings = {
    results: FantasyLeagueStandingsResult[]
}

export type FantasyLeagueStandingsResult = {
    id: number,
    player_name: string,
    rank: number,
    last_rank: number,
    total: number,
    entry: number,
    entry_name: string
}