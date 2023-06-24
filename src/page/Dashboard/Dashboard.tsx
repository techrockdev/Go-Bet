import { Slider } from "../../Features/Dashboard/Slider";
import { BetSlip } from "../../Features/BetSlip/BetSlip";

export const Dashboard = () => {
	return (
		<div className=" py-4 pl-16 pr-7 flex space-x-4">
			<Slider />
			<BetSlip />
		</div>
	);
};
