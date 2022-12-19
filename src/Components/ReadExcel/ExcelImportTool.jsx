import React, { useState, useRef } from "react";
import { TableRow, TableCell } from '@material-ui/core';
import { Delete} from '@material-ui/icons'
import * as XLSX from 'xlsx'

export const ExcelImportTool = (props) => {
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState(null)
    const [sheetNames, setSheetNames] = useState([])
    const [sheetData, setSheetData] = useState({})

    const acceptableFileName = ["xlsx", "xls"]
    const fileRef = useRef();

    const checkFileName = (name) => {
        return acceptableFileName.includes(name.split(".").pop().toLowerCase())
    }

    const readDataFromExcel = (data) => {
        const wb = XLSX.read(data)
        setSheetNames(wb.SheetNames)
       
        var mySheetData={}

        for (var i=0; i < wb.SheetNames.length; i++) {
            let sheetName = wb.SheetNames[i]
            //console.log(sheetName)
            const worksheet = wb.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet,
                {
                    blackrows: "",
                    header: 1,
                })

            mySheetData[sheetName] = jsonData;
          
        }
        setSheetData(mySheetData)
       // console.log(mySheetData)
        //console.log(wb)

        return mySheetData
    }
    const handleFile = async (e) => {

        const myFile = e.target.files[0];
        if (!myFile) return;
        if (!checkFileName(myFile.name)) {
            alert("Arquivo incompativel")
            return;
        }

        const data = await myFile.arrayBuffer();

        const mySheetData = readDataFromExcel(data)

        setFile(myFile)
        setFileName(myFile.name);
        props.onFileUploaded(mySheetData)
    }

    const handleRemove = () => {
        setFile(null)
        setFileName(null)
        setFileName(null)
        setSheetNames([])
        setSheetData(null)
        props.onFileUploaded(null)
        fileRef.current.value = "";
    }
    return (
        <TableRow>
            <TableCell >
                <div className="mb-2">
                    {fileName && <label>FileName:{fileName}</label>}
                    {!fileName && <label>Faca o upload de arquivo</label>}
                </div>
                <div >
                    <input
                        type="file"
                        accept="xlsx, xls"
                        multiple={false}
                        onChange={(e) => handleFile(e)}
                        ref={fileRef}
                    />
                    {fileName && (
                        <Delete onClick={()=>handleRemove()} />
                    )}
                </div>
            </TableCell>
        </TableRow>
    )
}