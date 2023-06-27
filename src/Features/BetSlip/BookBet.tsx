import { Button } from "../../components/UI/Button/Button";
import { useMatches } from "../../hooks/useMatches";
import { TableRowsLoader } from "../Matches/MatchTable/TableSkeleton";

export const BookBet = () => {
	const { matches, data } = useMatches();

	return (
		<div className="h-[292px] overflow-y-scroll">
		{!data ? (
				<TableRowsLoader rowsNum={5} />
			) : (
				matches.map((match) => (
					<div className="p-4 border-b border-b-[#EEF0F2]" key={match.id}>
						<h3 className="font-bold mb-4">{match.club1} vs {match.club2}</h3>
						<div className="flex flex-col">
							<label htmlFor="your__pick" className="text-gray-500 text-xs font-bold">
								YOUR PICK
							</label>
							<select
								name="your pick"
								className="bg-[rgba(63,132,229,0.2)]  px-1 py-2 border-none outline-none my-2 [&>*]:checked:bg-[red] [&>*]:text-[#0D1B2A] [&>*]:bg-[#EEF0F2]"
								id="your__pick">
								<option value={match.club1}>{match.club1}</option>
								<option value={match.club2}>{match.club2}</option>
							</select>
						</div>
						<div className="flex flex-col">
							<div>
								<input
									type="number"
									name="amount"
									className="py-1 text-gray-500 w-full bg-[#EEF0F2] outline-none focus:border-[#3F84E5] px-2"
									placeholder="Stake Amount"
								/>
							</div>
							<div className="flex my-5 justify-between">
								<div>
									<p className="text-gray-500 text-xs font-bold uppercase">Odds</p>
									<p>{match.odds}</p>
								</div>
								<div>
									<p className="text-gray-500 text-xs font-bold uppercase">
										Possible Winning
									</p>
									<p className="text-[#3F84E5]">{ match.win}</p>
								</div>
							</div>
						</div>
						<Button className="bg-[#3F84E5] font-bold w-full">Place a Bet</Button>
					</div>
				))
			)}
		</div>
	);
};
