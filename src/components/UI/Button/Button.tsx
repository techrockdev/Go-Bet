import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { icon?: ReactNode };

export const Button = ({ className, icon,children, ...props }: ButtonType) => {

    return (
        <button {...props} className={`p-2 rounded-lg outline-none border ${className}`}>{children}</button>
    );
};