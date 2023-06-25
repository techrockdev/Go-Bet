export const BookBet = () => {
	return (
		<form className="p-4">
			<h3 className="font-bold mb-4">Real Madrid vs Barcelona</h3>
			<div className="flex flex-col">
				<label htmlFor="your__pick" className="text-gray-500 text-xs font-bold">
					YOUR PICK
				</label>
				<select
					name="your pick"
					className="bg-[rgba(63,132,229,0.2)]  px-1 py-2 border-none outline-none my-2 [&>*]:checked:bg-[red] [&>*]:text-[#0D1B2A] [&>*]:bg-[#EEF0F2]"
					id="your__pick">
					<option value="Real Madrid">Real Madrid</option>
					<option value="Barcelona">Barcelona</option>
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
						<p>1.75</p>
					</div>
					<div>
						<p className="text-gray-500 text-xs font-bold uppercase">
							Possible Winning
						</p>
						<p className="text-[#3F84E5]">$400</p>
					</div>
				</div>
			</div>
			<button className="bg-[#3F84E5] p-2 rounded font-bold w-full">
				Place a Bet
			</button>
		</form>
	);
};
