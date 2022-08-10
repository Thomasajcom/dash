export type DayAtWorkType = "FULL" | "FIRST-HALF" | "LAST-HALF" | "EMPTY";
export type DayAtWork = {
    userId: string;
    date: Date;
    type: DayAtWorkType;
    comment?: string;
    user: User
};
export type DaySummary = {
    date: Date,
    attendees: DayAtWork[]
}

export type User = {
    id: string,
    name: string,
    profilePicture?: string
}
