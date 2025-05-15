export async function* decodeStreamBody(response: Response): AsyncGenerator<string> {
    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");

    if (!reader) return;

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        yield decoder.decode(value, { stream: true })
    }
}