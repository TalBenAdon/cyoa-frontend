export async function postJson(url: string, payload: object): Promise<Response> {
    return await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })
}