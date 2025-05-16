import { useAdventureUIStore } from "../../store/useAdventureUIStore"

export const appendStreamToUI = (toAppend: string, currentTag: string) => {
    const { streamStoryText, streamOptions } = useAdventureUIStore.getState()
    console.log(toAppend, currentTag);

    switch (currentTag) {
        case "text":
            streamStoryText(toAppend)
            break;

        case "option1":
        case "option2":
        case "option3": {

            const index = Number(currentTag.slice(-1)) - 1;
            streamOptions(index, toAppend)
            break

        }
        default:
            break;
    }

}