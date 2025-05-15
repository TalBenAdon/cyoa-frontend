import { useAdventureUIStore } from "../../store/useAdventureUIStore"

export const appendStreamToUI = (toAppend: string, currentTag: string) => {
    const { setStoryText, storyText, optionsList } = useAdventureUIStore.getState()

    switch (currentTag) {
        case "text":
            useAdventureUIStore.setState({ storyText: storyText + toAppend })
            break;

        case "option1":
        case "option2":
        case "option3": {

            const index = Number(currentTag.slice(-1)) - 1;
            const updatedOptions = [...optionsList]
            updatedOptions[index] = (updatedOptions[index] || "") + toAppend
            useAdventureUIStore.setState({ optionsList: updatedOptions })
            break

        }
        default:
            break;
    }

}