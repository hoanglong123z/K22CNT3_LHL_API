import React, { useEffect, useState } from 'react'
import axios from "../API/LHLAPI";

export default function LHLCategoryForm({ oncloseForm, onCategorySubmit, renderLHLCategory }) {
    //state 
    const [lhlId, setLhlId] = useState(0);
    const [lhlCategoryName, setLhlCategoryName] = useState("");
    const [lhlCategoryStatus, setLhlCategoryStatus] = useState(true);

    useEffect(() => {
        setLhlId(renderLHLCategory.lhlId);
        setLhlCategoryName(renderLHLCategory.lhlCategoryName);
        setLhlId(renderLHLCategory.lhlCategoryStatus);
    });
    const lhlHandleClose = () => {
        oncloseForm(false);
    }
    const lhlHandleSubmit = async (event) => {
        event.preventDefault();
        if (lhlId === 0) { //thêm
            let lhlCategory = {
                lhlId: 0,
                lhlCategoryName: lhlCategoryName,
                lhlCategoryStatus: lhlCategoryStatus
            }
            await axios.post("LhlCategory", lhlCategory);
            onCategorySubmit(lhlCategory);
        } else {//sửa
            let lhlCategory = {
                lhlId: lhlId,
                lhlCategoryName: lhlCategoryName,
                lhlCategoryStatus: lhlCategoryStatus
            }
            await axios.put("LhlCategory", lhlCategory);
            onCategorySubmit(lhlCategory);
        }
    }
    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Category Name</span>
                    <input type="text" class="form-control" name='lhlCategoryName'
                        value={lhlCategoryName}
                        onChange={(ev) => setLhlCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name" aria-describedby="basic-addon1" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Category Status</span>
                    <select className='form-control'
                        name='lhlCategoryStatus'
                        value={lhlCategoryStatus}
                        onChange={(ev) => setLhlCategoryStatus(ev.target.value)}>
                        <option value={true}>Hiển Thị</option>
                        <option value={false}>Tạm Khóa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={lhlHandleSubmit}>Ghi Lại</button>
                <button className='btn btn-danger' onClick={lhlHandleClose}>Đóng</button>
            </form>
        </div>
    )
}
