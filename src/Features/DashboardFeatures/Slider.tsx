import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card } from "../../components/UI/Card/Card";
import { SlideContent } from "./SlideContent";
import womenFootball from "../../asset/image/women-football.jpg";
import stadium from "../../asset/image/stadium.jpg";
import { Button } from "../../components/UI/Button/Button";

export const Slider = () => {
	return (
		<Card className="h-[18.4rem]">
			<Splide
				options={{
					rewind: true,
					autoplay: false,
					arrows: false,
					speed: 10,
				}}
				className="h-full">
				<SplideSlide>
					<SlideContent src={stadium} alt="Football Stadium">
						<div className="p-4">
							<h1 className="uppercase text-3xl font-bold">go bet</h1>
							<div
								className="py-6 px-2 mt-5 bg-[rgba(13,27,42,0.6)] relative
							before:border-l-2
							before:border-t-2
							before:top-0
							before:left-0
							before:h-10
							before:w-10
							before:absolute
							before:border-[#3F84E5]
							after:border-r-2
							after:border-b-2
							after:bottom-0
							after:right-0
							after:h-10
							after:w-10
							after:border-[#3F84E5]
							after:absolute">
								more than just a bet
							</div>
							<div className="mt-5 ">
								<Button className="w-1/2  text-sm ">take part</Button>
							</div>
						</div>
					</SlideContent>
				</SplideSlide>
				<SplideSlide>
					<SlideContent src={womenFootball} alt="Women Football ">
						<div>Hello</div>
					</SlideContent>
				</SplideSlide>
			</Splide>
		</Card>
	);
};
