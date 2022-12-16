import React from "react";
import {  Card, CardHeader, CardContent, TableRow, TableCell} from '@material-ui/core';
import { ExcelImportTool } from "./ExcelImportTool";
export function ReadExcel() {

    return (
        <>
            <div>
                <TableRow>
                    <TableCell >
                        <Card>  
                            <CardHeader>
                                <h5> Read Excell sheets</h5>
                                <p>categoris</p>
                            </CardHeader>
                            <CardContent>
                                <ExcelImportTool />
                            </CardContent>
                        </Card>
                    </TableCell>
                </TableRow>
            </div>
        </>
    );
}