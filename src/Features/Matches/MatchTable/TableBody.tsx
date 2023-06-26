import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MatchData from "../MatchData";

export const TBody = () => {
	return (
		<TableBody>
			{MatchData().map((row) => (
				<TableRow
					key={row.name}
					sx={{ "td, th": { border: 0, color: "#EEF0F2 " } }}>
					<TableCell>{row.fat}</TableCell>

					<TableCell className="bg-[#3 F84E5]" component="th" scope="row">
						{row.name}
					</TableCell>

					<TableCell>{row.fat}</TableCell>

					<TableCell component="th" scope="row" className="bg-[#3F 84E5]">
						{row.name}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
