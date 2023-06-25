import { Slider } from "../../Features/DashboardFeatures/Slider";
import { BetSlip } from "../../Features/BetSlip/BetSlip";

export const Dashboard = () => {
	return (
		<div className="py-4 pl-16 pr-7 flex space-x-4">
			<div className="w-full">
				<Slider />
			</div>
			<div className="w-[500px] ">
				<BetSlip />
			</div>
		</div>
	);
};
