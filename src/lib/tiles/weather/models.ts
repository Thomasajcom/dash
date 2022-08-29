export type WeatherCompact = {
    properties: WeatherProperties;
} 

export type WeatherProperties = {
    timeseries: WeatherTimeseries[]
}

export type WeatherTimeseries = {
    time: number,
    data: WeatherData

}

export type WeatherData = {
    instant: WeatherDataInstant,
    next_1_hours: WeatherDataNext
}

export type WeatherDataInstant = {
    details: WeatherDataDetails,
}

export type WeatherDataNext = {
    summary: WeatherDataSummary,
}

export type WeatherDataDetails = {
    air_temperature: number,
    wind_speed: number
    wind_from_direction: number
}

export type WeatherDataSummary = {
    symbol_code: string
}