export type EventSource = {
    id: string;
    name: string;
    events: Array<{
        id: string;
        name: string;
        description: string;
        cached?: boolean;
        manualMetadata?: Record<string, unknown>;
        isIntegration?: boolean;
        queued?: boolean;
        activityFeed?: {
            icon: string;
            getMessage: (eventData: any) => string;
        }
    }>;
};

export type EventManager = {
    registerEventSource: (eventSource: EventSource) => void;
    triggerEvent: (
        sourceId: string,
        eventId: string,
        meta: Record<string, unknown>,
        isManual?: boolean
    ) => void;
};
