type PropType = {
	src: string;
	alt: string;
};

export const SlideContent = ({ src, alt }: PropType) => {
	return (
		<div>
			<div className="h-80 w-full">
				<img
					src={src}
					alt={alt}
					width="500px"
					className="h-full w-full object-cover rounded"
				/>
			</div>
		</div>
	);
};
