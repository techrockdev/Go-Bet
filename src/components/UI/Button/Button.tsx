import { ReactNode } from "react";

type ButtonType = React.ComponentProps<"button"> & { icon?: ReactNode };

export const Button = ({ className, icon, children, ...props }: ButtonType) => {
	return (
		<button
			{...props}
			className={`outline-none text-[#EEF0F2] bg-[#3F84E5] p-2 rounded font-bold uppercase ${className}`}>
			{children}
		</button>
	);
};
