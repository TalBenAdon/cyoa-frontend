



export function processBufferChunks(chunk: string,
    buffer: string,
    currentTag: string,
    appendingFn: (text: string, tag: string) => void
): { newBuffer: string, tag: string } {

    buffer += chunk
    console.log({ "currentTag": currentTag });
    console.log({ "currentBuffer": buffer });

    const tagStart = buffer.indexOf("<")
    const tagEnd = buffer.indexOf(">", tagStart)

    if (tagStart !== -1) { //tag start found
        console.log({ "tag start detected": buffer });

        if (tagEnd !== -1) { //tag end also found

            const matches = buffer.match(/<[^>]+>/g)
            if (matches && matches.length >= 2) {
                console.log("two tags within the buffer");
                buffer = matches[1]
            }
            const tagToCheck = buffer.slice(tagStart + 1, tagEnd).trim()
            if (!tagToCheck.includes("/") && !tagToCheck.includes("\\")) {

                const newTag = buffer.slice(tagStart + 1, tagEnd).trim()
                console.log({ "tag Changed!": currentTag });
                buffer = buffer.slice(0, tagStart) + buffer.slice(tagEnd + 1)
                const toAppend = buffer
                appendingFn(toAppend, newTag)
                return { newBuffer: "", tag: newTag }

            } else {
                return { newBuffer: buffer.slice(tagEnd + 1), tag: currentTag }
            }
        } else {
            const trailText = buffer.slice(0, tagEnd)
            appendingFn(trailText, currentTag)
            return { newBuffer: buffer.slice(tagStart), tag: currentTag }
        }
    } else {
        appendingFn(buffer, currentTag)
        return { newBuffer: "", tag: currentTag }
    }

}