import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const TableHeader = () => {
	return (
		<TableHead>
			<TableRow
				sx={{ th: { borderBottom: "2px solid #aaaaaa ", color: "#EEF0F2 " } }}>
				<TableCell>Date</TableCell>
				<TableCell>Team A</TableCell>
				<TableCell>Odds</TableCell>
				<TableCell>Team B</TableCell>
			</TableRow>
		</TableHead>
	);
};
