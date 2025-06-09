import { ComponentPropsWithoutRef, forwardRef, useEffect, useRef } from "react";

type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & {
    value: string,
    placeHolder: string,
    onChangeText: (e: string) => void;
    onSubmit: () => void;
}




const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ value, placeHolder, onChangeText, onSubmit }, ref) => {

        const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                onSubmit()
            }
        }

        const textAreaRef = useRef<HTMLTextAreaElement>(null)
        const shadowRef = useRef<HTMLDivElement>(null)


        useEffect(() => {
            if (!ref) return
            if (typeof ref === "function") {
                ref(textAreaRef.current)
            } else {
                (ref as React.RefObject<HTMLTextAreaElement | null>).current = textAreaRef.current
            }
        }, [ref])


        useEffect(() => {
            const textArea = textAreaRef.current
            const shadow = shadowRef.current
            if (textArea && shadow) {
                shadow.textContent = value + "\u200b"
                textArea.style.height = shadow.offsetHeight + "px";

            }
        }, [value])


        return (
            <div className="w-full relative flex items-center">

                <div ref={shadowRef} className="absolute invisible whitespace-pre-wrap break-words w-full box-border leading-normal text-start">
                </div>

                <textarea className="w-full resize-none focus:outline-none max-h-40 overflow-y-auto text-start leading-none box-border placeholder-placeholder-color"
                    value={value}
                    ref={textAreaRef}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeHolder}
                    rows={1}
                />
            </div>

        )
    })

export default TextArea
