import { ComponentPropsWithoutRef } from "react";
import DropTriangle from '../../../assets/icons/dropDownTriangle.svg?react'
import { toolIconMap } from "../../../utils/ToolIconsMap";

type ToolTitleButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
}

type ToolItemButtonProps = ComponentPropsWithoutRef<'button'> & {
    itemName: string;
    itemType: 'hat' | 'shirt' | 'pants' | 'shoes' | 'weapon' | 'gloves' | 'shield' | 'accessory';
}

function isTitleProp(props: ToolTitleButtonProps | ToolItemButtonProps): props is ToolTitleButtonProps {
    return 'title' in props
}

export default function ToolButton(props: ToolTitleButtonProps | ToolItemButtonProps) {
    if (isTitleProp(props)) {

        return (
            <button className="flex items-center gap-2 cursor-pointer" {...props}>
                <DropTriangle className='w-3 h-3' />
                <p className="text-text-base">{props.title}</p>
            </button>
        )

    } else {
        return (
            <button></button>
        )
    }
}