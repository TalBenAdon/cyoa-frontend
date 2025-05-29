import { type ComponentPropsWithoutRef } from "react";

type ToolMenuSwitchButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
    isToggled: boolean;
}

export default function ToolMenuSwitchButton({ title, isToggled, ...props }: ToolMenuSwitchButtonProps) {


    return (
        <button className={`basis-1/2 hover:underline ${isToggled ?? 'underline'}`} {...props}>
            <p className="text-[12px] lg:text-xs">{title}</p>
        </button>
    )
}