import { Card } from "../../components/UI/Card/Card";
import { DashboardAmout } from "../UserFunds/DashboardAmount";
import { BookBet } from "./BookBet";

export const BetSlip = () => {
	return (
		<Card className=" w-full">
			<DashboardAmout/>
			<BookBet />
		</Card>
	);
};
