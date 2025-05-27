import { ComponentPropsWithoutRef } from "react";

type ToolTitleButtonProps = ComponentPropsWithoutRef<'button'> & {
    title: string;
}

export default function ToolButton({ title, ...props }: ToolTitleButtonProps) {
    return (
        <button {...props}>
            {title}
        </button>
    )
}