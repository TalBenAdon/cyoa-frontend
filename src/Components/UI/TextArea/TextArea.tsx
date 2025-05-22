import { ComponentPropsWithoutRef } from "react";

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
    value: string,
    placeHolder: string,
    onChange: (text: string) => void;
    onSumbit: () => void;
}


export default function TextArea({ value, placeHolder, onChange, onSumbit }: TextAreaProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && e.shiftKey) {
            e.preventDefault()
            onSumbit()
        }
    }
    return (
        <textarea className=""
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeHolder}
        />
    )
}