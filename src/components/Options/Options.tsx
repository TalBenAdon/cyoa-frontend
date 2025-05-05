import Option from "./Option";

type OptionsProps = {
    options: string[]
}

export default function Options({ options }: OptionsProps) {

    console.log({ "options": options });

    return (
        <ul className="flex bg-white shrink-0 flex-col  rounded-2xl h-52 mt-6 lg:mx-52 ">
            {options.map((option, i) => {

                return <li className="flex grow" key={i}><Option text={option} /></li>
            })}
            <li className="flex grow">
                <Option text="Custom" />
            </li>
        </ul>
    )
}