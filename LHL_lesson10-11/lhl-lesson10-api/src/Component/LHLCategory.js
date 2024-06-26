import React from 'react'

export default function LHLCategory({ renderLHLCategories, onAddNew, onLhlDelete, onLhlEdit }) {
    console.log("renderLHLCategories: ", renderLHLCategories);
    let lhlCategoriesElement = renderLHLCategories.map((lHlCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{lHlCategory.lhlId}</td>
                <td>{lHlCategory.lhlCategoryName}</td>
                <td>{lHlCategory.lhlCategoryStatus === true ? "Hiển Thị" : "Tạm Khóa"}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => lhlhandleDelete(lHlCategory.lhlId)}>Delete</button>
                    <button className='btn btn-success' onClick={() => lhlhandleEdit(lHlCategory)}>Edit</button>
                </td>
            </tr>
        )
    })
    const lhlhandleDelete = (lhlId) => {
        if (window.confirm('Bạn Có Muốn Xóa ['+lhlId+'] Không?')) {
            console.log("Delete:", lhlId);
            onLhlDelete(lhlId);
        } else {

        }
    }
    const lhlhandleEdit = (lHlCategory)=>{
        onLhlEdit(lHlCategory);
    }

    const lhlHandleAdd = () => {
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh Sách Loại Sản Phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã Loại</th>
                        <th>Tên Loại</th>
                        <th>Trạng Thái</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lhlCategoriesElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={lhlHandleAdd}>Thêm Mới</button>
        </div>
    )
}
