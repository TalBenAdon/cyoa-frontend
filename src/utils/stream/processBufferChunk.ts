



export function processBufferChunks(chunk: string,
    buffer: string,
    currentTag: string,
    appendingFn: (text: string, tag: string) => void
): { newBuffer: string, tag: string } {

    buffer += chunk
    console.log({ "currentTag": currentTag });
    console.log({ "currentBuffer": buffer });

    while (buffer.length > 0){
        if (!currentTag) {
            const startMatch = buffer.match(/::(TITLE|TEXT|OPTION)::/);
            if (startMatch && startMatch.index !== undefined){
                currentTag = startMatch[1];
                buffer = buffer.slice(startMatch.index + startMatch[0].length)
                continue
            } else {
                break;
            }
        }


        const endIndex = buffer.indexOf("::END::")
        if (endIndex !== -1) {
            const content = buffer.slice(0, endIndex)
            appendingFn(content, currentTag)

            buffer = buffer.slice(endIndex + "::END::".length)
            currentTag = ""
            continue
        } else {
            if (currentTag) {
                appendingFn(buffer, currentTag);
            }
            break
        }
    }

    return {newBuffer : buffer,tag: currentTag}

}