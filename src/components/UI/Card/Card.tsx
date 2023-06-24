import { ReactNode } from "react";

type PropType = {
	children: ReactNode;
	className: string;
};
export const Card = ({ className, children }: PropType) => {
	return <div className={`bg-[#343434] rounded ${className}`}>{children}</div>;
};
