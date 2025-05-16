import { useAdventureCoreStore } from "../store/useAdventureCoreStore"
import { useAdventureUIStore } from "../store/useAdventureUIStore"
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

export function useAIstreamer() {
    const bufferRef = useRef<string>("")
    const currentTagRef = useRef<string>("")


    const setCurrentAdventureId = useAdventureCoreStore((state) => state.setCurrentAdventureId)
    const reset = useAdventureUIStore((state) => state.reset)


    const getStream = async ({ url, payload }: useAIStreamerProps) => {

        const response = await postJson(url, payload)

        if ("type" in payload) {
            const adventureId = extractHeader(response, "X-adventure-ID")
            if (!adventureId) {
                console.warn("Missing X-adventure-ID in response headers");
            } else {
                setCurrentAdventureId(adventureId)
            }
        }
        reset()


        // let buffer = ""
        // let currentTag = ""


        for await (const chunk of decodeStreamBody(response)) {
            const { newBuffer, tag } = processBufferChunks(chunk, bufferRef.current, currentTagRef.current, appendStreamToUI)
            bufferRef.current = newBuffer
            currentTagRef.current = tag
        }
    }

    return { getStream }
}