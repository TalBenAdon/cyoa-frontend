import { useRef, useState } from "react";
import TextArea from "../UI/TextArea/TextArea";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import EnterButton from "../EnterButton/EnterButton";

export default function CustomChatBox() {
    const [text, setText] = useState<string>("")
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const focusTextArea = () => {
        textAreaRef.current?.focus()
        console.log("focusing");

    }

    const onChange = (text: string) => setText(text)


    const onSubmit = () => {


    }


    return (
        <div className="flex flex-col gap-6 w-full bg-button-base p-4 rounded-2xl cursor-text" onClick={focusTextArea} >
            <TextArea ref={textAreaRef} value={text} placeHolder="Plan your next action" onChangeText={onChange} onSubmit={onSubmit} />
            <div className="flex justify-between items-center">
                <DropDownMenu />
                <EnterButton />
            </div>
        </div>
    )

}