import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card } from "../../components/UI/Card/Card";
import { SlideContent } from "./SlideContent";
import womenFootball from "../../asset/image/women-football.jpg";
import stadium from "../../asset/image/stadium.jpg";

export const Slider = () => {
	return (
		<Card className="h-[18.4rem]">
			<Splide
				options={{
					rewind: true,
					autoplay: true,
					arrows: true,
					speed: 10,
				}}
				className="h-full">
				<SplideSlide>
					<SlideContent src={stadium} alt="Football Stadium" />
				</SplideSlide>
				<SplideSlide>
					<SlideContent src={womenFootball} alt="Women Football " />
				</SplideSlide>
			</Splide>
		</Card>
	);
};
