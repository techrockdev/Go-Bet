import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { icon?: ReactNode };

export const Button = ({ className, icon,children, ...props }: ButtonType) => {

    return (
        <button {...props} className={`outline-none bg-[#3F84E5] p-2 rounded  ${className}`}>{children}</button>
    );
};


