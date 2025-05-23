import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
    value: string ,
    placeHolder: string,
    onChangeText: (e: string) => void;
    onSubmit: () => void;
}


export default function TextArea({ value, placeHolder, onChangeText, onSubmit }: TextAreaProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault()
            onSubmit()
        }
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const shadowRef = useRef<HTMLDivElement>(null)


    useEffect(()=>{
        const textArea = textAreaRef.current
        const shadow = shadowRef.current
        if (textArea && shadow) {
            shadow.textContent = value + "\u200b"
            
            // textArea.style.height = "auto";
            // textArea.style.height = `${textArea.scrollHeight}px`;
            textArea.style.height = shadow.offsetHeight + "px";

        }
    },[value])
    

    return (
        <div className="w-full relative flex">

        <div ref={shadowRef} className="absolute invisible whitespace-pre-wrap break-words w-full box-border leading-normal text-start">
            </div>

        <textarea className="w-full p-0 resize-none focus:outline-none max-h-40 overflow-y-auto text-start leading-normal box-border placeholder-placeholder-color"
            value={value}
            ref={textAreaRef}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeHolder}
            rows={1}
            />
            </div>  
            
    )
}