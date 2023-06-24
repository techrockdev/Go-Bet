import { ReactNode } from "react";

type InputType = React.ComponentProps<"input"> & { icon?: ReactNode };

export const Input = ({ className, icon, ...props }: InputType) => {

    return (<input {...props} className={`p-2 rounded-lg outline-none shadow text-white border-blue-500 border-[1px] bg-[rgba(38,38,38,1)] ${className}`}/>
    );
};