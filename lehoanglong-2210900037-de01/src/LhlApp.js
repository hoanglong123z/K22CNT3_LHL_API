import React, { useEffect, useState } from 'react'
import LhlListTableName from './Lhl-Components/LhlListTableName'
import axios from './Lhl-apis/Lhl-2210900037'
import LhlFormTableName from './Lhl-Components/LhlFormTableName'
import LhlAddTableName from './Lhl-Components/LhlAddTableName'

export default function LhlApp() {
    //Đọc dữ liệu từ api
    const [lhlListTableName, setLhlListTableName] = useState([])
    const lhlGetTableName = async () => {
        let lhlResp = await axios.get("lhlTableName");
        console.log("App List:", lhlResp.data);
        setLhlListTableName(lhlResp.data);
    }

    useEffect(() => {
        lhlGetTableName();
    }, [])
    const lhlHandleDelete = async (lhlid) => {
        let lhlRes = await axios.delete("lhlTableName/" + lhlid);
        lhlGetTableName();
    }

    const lhlObjTableName = {
        "lhlTbName": "Lê Hoàng Long",
        "lhlTbEmail": "lehoanglong26072004@gmail.com",
        "lhlTbPhone": "0349393995",
        "lhlTbStatus": true,
        "lhlid": "2210900037"
    };
    const [lhlTableName, setLhlTableName] = useState(lhlObjTableName);

    // const lhlHandleAdd = async (newLhlItem) => {
    //     await axios.post("lhlTableName", newLhlItem);
    //     lhlGetTableName();
    // }
    const LhlHandleEdit =  () => {
        lhlGetTableName();
    }
    const lhlHandleEdit = (lhlObjEditTableName) => {
        setLhlTableName(lhlObjEditTableName);
    }

    const handleAdd = () => {
        lhlGetTableName()
    }
    return (
        <div className='container border my-3'>
            <h1>Bài Đánh Giá Hết Học Phần - Lê Hoàng Long - 2210900037</h1>
            <hr />
            <LhlListTableName renderLhlListTableName={lhlListTableName} onLhlDelete={lhlHandleDelete} onLhlEdit={lhlHandleEdit} />
            <hr />
            <LhlFormTableName renderLhlTableName={lhlTableName} onLhlEdit={LhlHandleEdit} />
            <hr />
            <LhlAddTableName onLhlAdd={handleAdd}/>
        </div>
    )
}