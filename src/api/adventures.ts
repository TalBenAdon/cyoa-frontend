import httpClient from "./axios/httpClient";

type AdventureIdName = {
    adventureId: string
    adventureName: string
}

type AdventuresListResponse = {
    adventures: AdventureIdName[]
}
export async function fetchAdventuresList(): Promise<AdventuresListResponse> {
    const response = await httpClient.get("/adventure/adventures")
    return response.data
}