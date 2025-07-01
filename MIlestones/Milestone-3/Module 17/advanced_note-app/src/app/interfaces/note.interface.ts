export interface INotes {
    title: string,
    content: string,
    category: "personal" | "work" | "study" | "other"|'programming'| 'backend'|'database',
    pinned: boolean,
    publishedDate: Date,
    tags: {
        label: string,
        color: string
    }
}