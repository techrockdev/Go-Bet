type PropType = {
	src: string;
	alt: string;
};

export const SlideContent = ({ src, alt }: PropType) => {
	return (
		<div>
			<div className="h-[18.4rem] w-full">
				<img
					src={src}
					alt={alt}
					className="h-full w-full object-cover rounded"
				/>
			</div>
		</div>
	);
};
