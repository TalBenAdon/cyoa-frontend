import { ComponentPropsWithoutRef } from "react";

type ToolMenuSwitchButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
    isToggled: string;

}

export default function ToolMenuSwitchButton({ title, isToggled, ...props }: ToolMenuSwitchButtonProps) {


    return (
        <button className={`flex-1 hover:underline ${isToggled === title ? 'underline' : ''}`} {...props}>
            <p className="text-[12px] lg:text-xs">{title}</p>
        </button>
    )
}