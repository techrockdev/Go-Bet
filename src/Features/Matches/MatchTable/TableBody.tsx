import { TableCell, TableRow } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import { TableRowsLoader } from "./TableSkeleton";
import { useMatches } from "../../../hooks/useMatches";

export const TBody = () => {
	const {matches , data}= useMatches()

	return (
		<TableBody>
			{!data ? (
				<TableRowsLoader rowsNum={5} />
			) : (
				matches.map((row: any) => (
					<TableRow
						key={row.id}
						sx={{ "td, th": { border: 0, color: "#EEF0F2 " } }}
					>
						<TableCell>{row.date}</TableCell>

						<TableCell className="bg-[#3 F84E5]" component="th" scope="row">
							{row.club1}
						</TableCell>

						<TableCell>{row.odds}</TableCell>

						<TableCell component="th" scope="row" className="bg-[#3F 84E5]">
							{row.club2}
						</TableCell>
					</TableRow>
				))
			)}
		</TableBody>
	);
}
