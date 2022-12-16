import React, { useState } from "react";
import * as XLSX from 'xlsx';
export const ParseExcel = () => {
    const [fileName, setFileName] = useState(null)
    const [columns, setColumns] = useState([])

    const handleFile = async (e) => {

        const file = e.target.files[0];
        setFileName(file.name);
        const data = await file.arrayBuffer();
        //trasnforma a planilha em um objeto
        const workbook = XLSX.readFile(data, { sheetRows: 5 })

        //trasforma o objeto e seus arrays em varios objetos por elemento do array
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "", })

        setColumns(jsonData[0])
        console.log(jsonData)
    }
    return (
        <div>
            <h1>ParseExcel</h1>
            {fileName && (
                <React.Fragment>
                    <p>
                        FileName: <span>{fileName}</span>
                    </p>
                    <p>
                        Columns:{""}
                        <select>
                            {columns.map((c,index)=>(
                                <option value={index}>{c}</option>
                            ))}
                        </select>
                    </p>
                </React.Fragment>

            )}
            <input type="file" onChange={(e) => handleFile(e)} />
        </div>
    )
}