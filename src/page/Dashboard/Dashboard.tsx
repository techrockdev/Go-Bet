import { Slider } from "../../Features/DashboardFeatures/Slider";
import { BetSlip } from "../../Features/BetSlip/BetSlip";
import Matches from "../../Features/Matches/Matches";

export const Dashboard = () => {
	return (
		<div className="py-4 pl-6 flex space-x-4 mb-4 max-w-7xl">
			<div className="w-full space-y-4 mb-10">
				<Slider />
				<Matches />
				<div></div>
			</div>
			<div className="w-[500px] ">
				<BetSlip />
			</div>
		</div>
	);
};
