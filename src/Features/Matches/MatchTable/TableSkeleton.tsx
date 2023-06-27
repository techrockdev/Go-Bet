import { FC, Fragment } from 'react';
import { Skeleton, TableCell, TableRow } from '@mui/material';

interface TableRowsLoaderProps {
    rowsNum: number;
}

export const TableRowsLoader: FC<TableRowsLoaderProps> = ({ rowsNum }) => {
    return (
        <Fragment>
            {[...Array(rowsNum)].map((row, index) => (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        <Skeleton animation="wave" variant="text" />
                    </TableCell>
                    <TableCell>
                        <Skeleton animation="wave" variant="text" />
                    </TableCell>
                    <TableCell>
                        <Skeleton animation="wave" variant="text" />
                    </TableCell>
                    <TableCell>
                        <Skeleton animation="wave" variant="text" />
                    </TableCell>
                </TableRow>
            ))}
        </Fragment>
    );
};
