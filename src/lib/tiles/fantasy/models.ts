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
    event_total:number
}