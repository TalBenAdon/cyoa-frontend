export function extractHeader(response: Response, headerKey: string): string | null {
    return response.headers.get(headerKey)
}