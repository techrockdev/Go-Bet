import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableHeader } from "./MatchTable/TableHead";
import { TBody } from "./MatchTable/TableBody";

export default function Matches() {
	return (
		<TableContainer component={Paper}>
			<Table
				sx={{ minWidth: 650, background: "#0D1B2A" }}
				aria-label="simple table">
				<TableHeader />
				<TBody />
			</Table>
		</TableContainer>
	);
}
