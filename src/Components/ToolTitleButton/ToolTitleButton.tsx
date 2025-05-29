import { ComponentPropsWithoutRef } from "react";
import DropTriangle from '../../assets/icons/dropDownTriangle.svg?react'


type ToolTitleButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
    isToggled: boolean;
}


export default function ToolTitleButton({ title, isToggled, ...props }: ToolTitleButtonProps) {


    return (
        <button className="flex items-center gap-2 cursor-pointer" {...props}>
            <DropTriangle className={`w-3 h-3 ${isToggled ? 'rotate-90' : ''}`} />
            <p className="text-text-base">{title}</p>
        </button>
    )


}