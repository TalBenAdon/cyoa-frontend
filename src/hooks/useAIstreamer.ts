import { useAdventureCoreStore } from "../stores/useAdventureCoreStore"
import { useAdventureUIStore } from "../stores/useAdventureUIStore"
import { postJson } from "../api/fetch"
import { extractHeader } from "../utils/headers/extractHeader"
import { decodeStreamBody } from "../utils/stream/decodeStreamBody"
import { processBufferChunks } from "../utils/stream/processBufferChunk"
import { appendStreamToUI } from "../utils/stream/appendStreamToUI"
import { useRef } from "react"

type Payload = { type: string } | { choice: string }

type useAIStreamerProps = {
    url: string,
    payload: Payload,
}

export type parseState = {
    buffer: string,
    currentTag: string,
    optionCounter: number,
    doubleColonCheck: number,
}

export function useAIstreamer() {

    const parserRef = useRef<parseState>({
        buffer: "",
        currentTag: "",
        optionCounter: 0,
        doubleColonCheck: 0
    })



    const updateAdventure = useAdventureCoreStore((state) => state.updateAdventure)
    const reset = useAdventureUIStore((state) => state.reset)


    const getStream = async ({ url, payload }: useAIStreamerProps) => {

        const response = await postJson(url, payload)

        if ("type" in payload) {
            const adventureId = extractHeader(response, "X-adventure-ID")
            if (!adventureId) {
                console.warn("Missing X-adventure-ID in response headers");
            } else {
                updateAdventure(adventureId)
            }
        }
        reset()




        for await (const chunk of decodeStreamBody(response)) {
            processBufferChunks(chunk, parserRef.current, appendStreamToUI)

        }

    }

    return { getStream }
}