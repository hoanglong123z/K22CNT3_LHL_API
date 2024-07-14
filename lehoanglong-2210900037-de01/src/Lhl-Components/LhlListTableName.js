import React from 'react'

export default function LhlListTableName({ renderLhlListTableName, onLhlDelete, onLhlEdit }) {
    console.log("List:", renderLhlListTableName);
    //hiển thị dữ liệu
    const lhlElementTableName = renderLhlListTableName.map((lhlItem, lhlIndex) => {
        return (
            <tr key={lhlIndex}>
                <td>{lhlItem.lhlid}</td>
                <td>{lhlItem.lhlTbName}</td>
                <td>{lhlItem.lhlTbEmail}</td>
                <td>{lhlItem.lhlTbPhone}</td>
                <td>{(lhlItem.lhlTbStatus=== true || lhlItem.lhlTbStatus==="true")? "ProVip" : "NON"}</td>
                <td>
                    <button className='btn btn-success m-2' onClick={()=>lhlHandleEdit(lhlItem)}>LHL-EDIT</button>|
                    {/* <button className='btn btn-info m-2' onClick={lhlHandleAdd}>LHL-ADD</button>| */}
                    <button className='btn btn-danger m-2'
                        onClick={() => lhlHandleDelete(lhlItem.lhlid)}
                    >LHL-DELETE</button>

                </td>
            </tr>
        )
    })
    //sự kiện xóa
    const lhlHandleDelete = (lhlid) => {
        if (window.confirm('Có Chắc Là Xóa UID=' +lhlid)) {
            onLhlDelete(lhlid);
        }
    }

    //sửa
    const lhlHandleEdit = (lhlObjTableName)=>{
        onLhlEdit(lhlObjTableName);
    }


    //Thêm 
    // const lhlHandleAdd = ()=>{
    //     const newLhlItem = {
    //         lhlTbName: "New Name", // Giá trị mẫu
    //         lhlTbEmail: "newemail@example.com", // Giá trị mẫu
    //         lhlTbPhone: "0123456789", // Giá trị mẫu
    //         lhlTbStatus: false, // Giá trị mẫu
    //         lhlid: "new-id" // Giá trị mẫu
    //     };
    //     onLhlAdd(newLhlItem);
    // }
    return (
        <div>
            <h1>Danh Sách Thông Tin....</h1>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>lhlid</th>
                        <th>lhlTbName</th>
                        <th>lhlTbEmail</th>
                        <th>lhlTbPhone</th>
                        <th>lhlTbStatus</th>
                        <th>Lhl : Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lhlElementTableName}
                </tbody>
            </table>
        </div>
    )
}
