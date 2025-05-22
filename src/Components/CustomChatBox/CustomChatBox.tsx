import  { useState } from "react";
import TextArea from "../UI/TextArea/TextArea";

export default function CustomChatBox() {
const [text, setText] = useState<string>("")

const onChange = (text: string) => {
setText(text)

}

const onSubmit = () => {
    
    
}
    return(
        <div className="w-full bg-button-base p-2 rounded-2xl">
            <TextArea value={text} placeHolder="Plan your next action" onChangeText={onChange} onSubmit={onSubmit} />

        </div>
    )
    
}