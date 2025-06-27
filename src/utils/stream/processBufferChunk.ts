



export function processBufferChunks(chunk: string,
    buffer: string,
    currentTag: string,
    appendingFn: (text: string, tag: string, optionCounter:number) => void
): { newBuffer: string, tag: string } {

    buffer += chunk
    let optionCounter = 0
    let doubleColonCheck = 0
    console.log({ "currentTag": currentTag });
    console.log({ "currentBuffer": buffer });

    while (buffer.length > 0){
        if (!currentTag) {
            const startMatch = buffer.match(/::(TITLE|TEXT|OPTION)::/);
            if (startMatch && startMatch.index !== undefined){
                currentTag = startMatch[1];
                buffer = buffer.slice(startMatch.index + startMatch[0].length)
                if (startMatch[1] === "OPTION") {
                    optionCounter++
                }
                continue
            } else {
                break;
            }
        }


        const endIndex = buffer.indexOf("::END::")
        
        if (endIndex !== -1) {



            const content = buffer.slice(0, endIndex)
            appendingFn(content, currentTag, optionCounter)

            buffer = buffer.slice(endIndex + "::END::".length)
            currentTag = ""
            continue
        } else {
           if (currentTag) {
             
             if(buffer.includes(":") && !buffer.includes("::")){
                 if (doubleColonCheck === 0) {
                     doubleColonCheck ++
                     console.log("checked colon once");
                     
                     break
                    } else  {
                        appendingFn(buffer, currentTag, optionCounter)    
                        buffer = ""
                        break  
                    }
                    
                    
                }
                
                if(buffer.includes("::")){
                    console.log("CONTINUING");
                    
                    break
                }
                
            }
            
            appendingFn(buffer, currentTag, optionCounter);
            buffer = ""
            break
        }
    }

    return {newBuffer : buffer,tag: currentTag}

}