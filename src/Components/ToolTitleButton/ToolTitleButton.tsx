import { ComponentPropsWithoutRef } from "react";
import DropTriangle from '../../assets/icons/dropDownTriangle.svg?react'


type ToolTitleButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
}


export default function ToolTitleButton({ title, ...props }: ToolTitleButtonProps) {


    return (
        <button className="flex items-center gap-2 cursor-pointer" {...props}>
            <DropTriangle className='w-3 h-3' />
            <p className="text-text-base">{title}</p>
        </button>
    )


}