import { parseState } from "../../hooks/useAIstreamer";




export function processBufferChunks(chunk: string,
    parserRef: parseState,
    appendingFn: (text: string, tag: string, optionCounter:number) => void
) {
    
    parserRef.buffer += chunk
    let optionCounter = 0
    let doubleColonCheck = 0
    console.log({ "currentTag": parserRef.currentTag });
    console.log({ "currentBuffer": parserRef.buffer });

    while (parserRef.buffer.length > 0){
        if (!parserRef.currentTag) {
            const startMatch = parserRef.buffer.match(/::(TITLE|TEXT|OPTION)::/);
            if (startMatch && startMatch.index !== undefined){
                parserRef.currentTag = startMatch[1];
                parserRef.buffer =  parserRef.buffer.slice(startMatch.index + startMatch[0].length)
                if (startMatch[1] === "OPTION") {
                    
                    optionCounter++
                    console.log(optionCounter);
                    
                    
                }
                continue
            } else {
                break;
            }
        }


        const endIndex = parserRef.buffer.indexOf("::END::")
        
        if (endIndex !== -1) {



            const content = parserRef.buffer.slice(0, endIndex)
            appendingFn(content, parserRef.currentTag, optionCounter)

            parserRef.buffer = parserRef.buffer.slice(endIndex + "::END::".length)
            parserRef.currentTag = ""
            continue
        } else {
           if (parserRef.currentTag) {
             
             if(parserRef.buffer.includes(":") && !parserRef.buffer.includes("::")){
                 if (doubleColonCheck === 0) {
                     doubleColonCheck ++
                     console.log("checked colon once");
                     
                     break
                    } else  {
                        appendingFn(parserRef.buffer, parserRef.currentTag, optionCounter)    
                        parserRef.buffer = ""
                        break  
                    }
                    
                    
                }
                
                if(parserRef.buffer.includes("::")){
                    console.log("CONTINUING");
                    
                    break
                }
                
            }
            
            appendingFn(parserRef.buffer, parserRef.currentTag, optionCounter);
            parserRef.buffer = ""
            break
        }
    }

    

}