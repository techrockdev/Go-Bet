import { ReactNode } from "react";

type PropType = {
	children: ReactNode;
	className: string;
};
export const Card = ({ className, children }: PropType) => {
	return <div className={`bg-[#0D1B2A] rounded ${className}`}>{children}</div>;
};
