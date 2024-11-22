export function addQuotes(value: number | string | null | undefined, quoteType: '"' | "'" | "`" = "'"): string {
    if (value == null) {
        return `${quoteType}${quoteType}`;
    }
    return `${quoteType}${value}${quoteType}`;
}