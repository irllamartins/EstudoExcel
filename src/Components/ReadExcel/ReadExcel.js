import React, { useState } from "react";
import { Card, CardContent, TableRow, TableCell, Table } from '@material-ui/core';
import { ExcelImportTool } from "./ExcelImportTool";
import styled from "styled-components"

export function ReadExcel() {

    const [sheetData, setSheetData] = useState(null)
    const [sheet, setSheet] = useState(null)
    const [sheetNames, setSheetNames] = useState(null)

    const handleFileUploaded = (e) => {
        console.log("File uploaded", e)
        if (e) {
            let sheetNames = Object.keys(e)
            setSheetNames(sheetNames)
            setSheet(Object.keys(e)[0])
        } else {
            setSheetNames(null)
        }

        setSheetData(e)
    }
    const handleSheetChange = (e) => {
        setSheet(e.target.value)
    }
    const StyledBody = styled.div`
     .Cards {background-color: #fbf2c4};
     
     
     `;

    return (
        < StyledBody>
           
            <div>
                <TableRow>
                    <TableCell md={12}>
                        <Card className="Cards">
                            <h5>Read Excell sheets</h5>
                            <p>categorias</p>

                            <CardContent>
                                <ExcelImportTool onFileUploaded={(e) => handleFileUploaded(e)} />
                            </CardContent>
                        </Card>
                    </TableCell>
                </TableRow>
                {
                    sheetData && (
                        <> <div className="Cards" >
                            <TableRow >
                                <TableCell md={12}>

                                    {
                                        sheetNames.map(s =>
                                            <div>
                                                <input type="radio" name="sheetName" checked={s === sheet} onChange={(e) => handleSheetChange(e)} value={s} key={s} />
                                                <label>{s}</label>
                                            </div>)
                                    }
                                </TableCell>
                            </TableRow >
                            </div>
                            <div className="Cards" >
                            <TableRow>
                                <h5 align="center">Nome da tabela selecionada: {sheet}</h5>
                                <TableRow>
                                    <TableCell md={12}>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    {sheetData[sheet][0].map(h => <th key={h}>{h}</th>)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {sheetData[sheet].slice(1).map((row) => <tr >{row.map(c => <td>{c}</td>)}</tr>)}
                                            </tbody>
                                        </Table>
                                    </TableCell>
                                </TableRow>
                            </TableRow> </div>
                           
                        </>)
                }
            </div>
        </ StyledBody>
    );
}