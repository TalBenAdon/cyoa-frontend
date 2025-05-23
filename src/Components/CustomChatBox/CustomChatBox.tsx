import  { useState } from "react";
import TextArea from "../UI/TextArea/TextArea";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

export default function CustomChatBox() {
const [text, setText] = useState<string>("")

const onChange = (text: string) => {
setText(text)

}

const onSubmit = () => {
    
    
}
    return(
        <div className="flex flex-col gap-6 w-full bg-button-base p-2 rounded-2xl">
            <TextArea value={text} placeHolder="Plan your next action" onChangeText={onChange} onSubmit={onSubmit} />
            <DropDownMenu/>
        </div>
    )
    
}