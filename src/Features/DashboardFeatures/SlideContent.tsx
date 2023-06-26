import { ReactNode } from "react";

type PropType = {
	src: string;
	alt: string;
	children: ReactNode;
};

export const SlideContent = ({ src, alt, children }: PropType) => {
	return (
		<div>
			<div className="h-[18.4rem] w-full relative">
				<img
					src={src}
					alt={alt}
					className=" h-full w-full object-cover rounded"
				/>

				<div className="bg-gradient-to-r from-black  absolute top-0 z-30 w-1/2  h-full">
					{children}
				</div>
			</div>
		</div>
	);
};
