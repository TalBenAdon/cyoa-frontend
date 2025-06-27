import { useAdventureUIStore } from "../../stores/useAdventureUIStore"

export const appendStreamToUI = (toAppend: string, currentTag: string, optionIndex: number) => {
    const { streamStoryText, streamOptions } = useAdventureUIStore.getState()
    console.log(`${toAppend} into tag: ${currentTag}`);

    switch (currentTag) {
        case "TITLE":
            break;
        case "TEXT":
            streamStoryText(toAppend)
            break;

        case "OPTION": {
            const index = (optionIndex - 1);
            streamOptions(index, toAppend)
            break

        }
        default:
            break;
    }

}