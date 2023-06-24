import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Card } from "../../components/UI/Card/Card";
// import image1 from "../../asset/image/hulk.jpeg";
// import image2 from "../../asset/image/dp.jpg";

export const Slider = () => {
	return (
		<Card className=" w-full">
			<Splide
				options={{
					rewind: true,
					autoplay: true,
					// speed: 10,
					gap: "1rem",
					width: 1000,
					height: 300,
				}}
				className=" ">
				<SplideSlide>{/* <img src={image1} alt="Imge 1" /> */}</SplideSlide>
				<SplideSlide>{/* <img src={image2} alt="Imge 2" /> */}</SplideSlide>
				<SplideSlide>{/* <img src={image1} alt="Imge 3" /> */}</SplideSlide>
			</Splide>
		</Card>
	);
};
