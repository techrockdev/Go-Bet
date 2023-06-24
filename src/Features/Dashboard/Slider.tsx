import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card } from "../../components/UI/Card/Card";
import { SlideContent } from "./SlideContent";
import womenFootball from "../../asset/image/women-football.jpg";
import stadium from "../../asset/image/stadium.jpg";

export const Slider = () => {
	return (
		<Card className=" w-full h-80">
			<Splide
				options={{
					rewind: true,
					autoplay: true,
					arrows: false,
					// speed: 10,

					gap: "1rem",
					width: 1000,
					// height: 250,
				}}
				className="h-full	">
				<SplideSlide>
					<SlideContent src={stadium} alt="Football Stadium" />
				</SplideSlide>
				<SplideSlide>
					<SlideContent src={womenFootball} alt="Women Football " />
				</SplideSlide>
				{/* <SplideSlide><img src={image1} alt="Imge 3" /></SplideSlide> */}
			</Splide>
		</Card>
	);
};
