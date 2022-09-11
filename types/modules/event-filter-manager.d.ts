export type EventFilter = {
    id: string;
    name: string;
    description: string;
    events: Array<{
        eventSourceId: string;
        eventId: string;
    }>;
    comparisonTypes: string[];
    valueType: "text" | "preset" | "number";
    presetValues(...args: any[]): Promise<any[]>;
    predicate(
        filterSettings: { comparisonType: string; value: any },
        eventData: {
            eventSourceId: string;
            eventId: string;
            eventMeta: Record<string, any>;
        }
    ): Promise<boolean>;
    valueIsStillValid?: (filterSettings: { comparisonType: string; value: any }, ...args: any[]) => boolean;
    getSelectedValueDisplay?: (filterSettings: { comparisonType: string; value: any }, ...args: any[]) => string;
};

export type EventFilterManager = {
    registerFilter(filter: EventFilter): void;
};
