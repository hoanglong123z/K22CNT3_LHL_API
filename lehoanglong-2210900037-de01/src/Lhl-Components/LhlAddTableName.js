import axios from '../Lhl-apis/Lhl-2210900037'
import React, { useState } from 'react'

export default function LhlAddTableName({ onLhlAdd }) {
    const [lhlTbName, setLhlTbName] = useState("")
    const [lhlTbEmail, setLhlTbEmail] = useState("")
    const [lhlTbPhone, setLhlTbPhone] = useState("")
    const [lhlTbStatus, setLhlTbStatus] = useState(false)

    const lhlHandleSubmit = async (event) => {
        event.preventDefault()
        const lhlObjTableName = {
            lhlTbName: lhlTbName,
            lhlTbEmail: lhlTbEmail,
            lhlTbPhone: lhlTbPhone,
            lhlTbStatus: lhlTbStatus
        }
        console.log(lhlObjTableName);

        try {
            await axios.post("lhlTableName", lhlObjTableName)
            onLhlAdd()
            // Reset form fields
            setLhlTbName("")
            setLhlTbEmail("")
            setLhlTbPhone("")
            setLhlTbStatus(false)
        } catch (error) {
            console.error("Error adding data:", error)
        }
    }

    return (
        <div>
            <h2>Form Thêm Mới Thông Tin</h2>
            <form onSubmit={lhlHandleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbName">Tên</span>
                    <input
                        type="text"
                        className="form-control"
                        name="lhlTbName"
                        value={lhlTbName}
                        onChange={(e) => setLhlTbName(e.target.value)}
                        placeholder="Vui Lòng Nhập Tên"
                        aria-label="lhlTbName"
                        aria-describedby="lhlTbName"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbEmail">Email</span>
                    <input
                        type="email"
                        className="form-control"
                        name="lhlTbEmail"
                        value={lhlTbEmail}
                        onChange={(e) => setLhlTbEmail(e.target.value)}
                        placeholder="Vui Lòng Nhập Email"
                        aria-label="lhlTbEmail"
                        aria-describedby="lhlTbEmail"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbPhone">Số Điện Thoại</span>
                    <input
                        type="text"
                        className="form-control"
                        name="lhlTbPhone"
                        value={lhlTbPhone}
                        onChange={(e) => setLhlTbPhone(e.target.value)}
                        placeholder="Vui Lòng Nhập Số Điện Thoại"
                        aria-label="lhlTbPhone"
                        aria-describedby="lhlTbPhone"
                        required
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lhlTbStatus">Trạng Thái</span>
                    <select
                        name="lhlTbStatus"
                        value={lhlTbStatus}
                        onChange={(e) => setLhlTbStatus(e.target.value === 'true')}
                        id="lhlTbStatus"
                        className="form-control"
                        required
                    >
                        <option value={true}>ProVip</option>
                        <option value={false}>NON</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary m-3">Thêm Mới</button>
            </form>
        </div>
    )
}
