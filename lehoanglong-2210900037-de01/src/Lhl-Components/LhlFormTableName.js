
import axios from '../Lhl-apis/Lhl-2210900037'
import React, { useEffect, useState } from 'react'

export default function LhlFormTableName({ renderLhlTableName, onLhlEdit }) {


    const [lhlid, setLhlid] = useState(renderLhlTableName.lhlid)
    const [lhlTbName, setlhlTbName] = useState(renderLhlTableName.lhlTbName)
    const [lhlTbEmail, setlhlTbEmail] = useState(renderLhlTableName.lhlTbEmail)
    const [lhlTbPhone, setlhlTbPhone] = useState(renderLhlTableName.lhlTbPhone)
    const [lhlTbStatus, setlhlTbStatus] = useState(renderLhlTableName.lhlTbStatus)


    useEffect(()=>{
        setLhlid(renderLhlTableName.lhlid)
        setlhlTbName(renderLhlTableName.lhlTbName)
        setlhlTbEmail(renderLhlTableName.lhlTbEmail)
        setlhlTbPhone(renderLhlTableName.lhlTbPhone)
        setlhlTbStatus(renderLhlTableName.lhlTbStatus)
    },[renderLhlTableName])
    const lhlHandleSubmit = async (lhlEvent)=>{
        lhlEvent.preventDefault();
        const lhlObjTableName = {
            "lhlTbName": lhlTbName,
            "lhlTbEmail": lhlTbEmail,
            "lhlTbPhone": lhlTbPhone,
            "lhlTbStatus": lhlTbStatus,
            "lhlid": lhlid
        }
        console.log(lhlObjTableName);

        //thêm mới dữ liệu vào api
        await axios.put("lhlTableName/"+lhlObjTableName.lhlid,lhlObjTableName);
        onLhlEdit();
    }

    // const lhlHandleAddmit = async (lhlev)=>{
    //     lhlev.preventDefault();
    //     const lhlObjTableName = {
    //         "lhlTbName": lhlTbName,
    //         "lhlTbEmail": lhlTbEmail,
    //         "lhlTbPhone": lhlTbPhone,
    //         "lhlTbStatus": lhlTbStatus,
    //         "lhlid": lhlid
    //     }
    //     console.log(lhlObjTableName);

    //     await axios.post("lhlTableName",lhlObjTableName);
    //     onLhlAdd();
    // }
    return (
        <div>
            <h2>Form Xử Lý Dữ Liệu sửa thông tin</h2>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlid">lhlid</span>
                    <input
                        type="text" className='form-control'
                        name='lhlid'
                        value={lhlid}
                        onChange={(lhlEv) => setLhlid(lhlEv.target.value)}
                        placeholder="Vui Lòng Nhập"
                        aria-label="lhlid"
                        aria-describedby="lhlid" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbName">lhlTbName</span>
                    <input
                        type="text" className='form-control'
                        name='lhlTbName'
                        value={lhlTbName}
                        onChange={(lhlEv) => setlhlTbName(lhlEv.target.value)}
                        placeholder="Vui Lòng Nhập"
                        aria-label="lhlTbName"
                        aria-describedby="lhlTbName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbEmail">lhlTbEmail</span>
                    <input
                        type="text" className='form-control'
                        name='lhlTbEmail'
                        value={lhlTbEmail}
                        onChange={(lhlEv) => setlhlTbEmail(lhlEv.target.value)}
                        placeholder="Vui Lòng Nhập"
                        aria-label="lhlTbEmail"
                        aria-describedby="lhlTbEmail" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbPhone">lhlTbPhone</span>
                    <input
                        type="text" className='form-control'
                        name='lhlTbPhone'
                        value={lhlTbPhone}
                        onChange={(lhlEv) => setlhlTbPhone(lhlEv.target.value)}
                        placeholder="Vui Lòng Nhập"
                        aria-label="lhlTbPhone"
                        aria-describedby="lhlTbPhone" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbStatus">lhlTbStatus</span>
                    <select
                        name='lhlTbStatus'
                        value={lhlTbStatus}
                        onChange={(lhlEv) => setlhlTbStatus(lhlEv.target.value)}
                        id='lhlTbStatus' className='form-control'>
                        <option value={true}>ProVip</option>
                        <option value={false}>NON</option>
                    </select>
                </div>
                <button className='btn btn-primary m-3' name='btnLhlSave' onClick={lhlHandleSubmit}> Lhl: Save</button>
                {/* <button className='btn btn-primary m-3' name='btnLhlAdd' onClick={lhlHandleAddmit}> Lhl: Add</button> */}
            </form>
        </div>
    )
}
