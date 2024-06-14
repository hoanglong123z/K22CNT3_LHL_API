import React from 'react'

export default function LHLStudentList({ renderLHLStudentList }) {
    console.log("Data:", renderLHLStudentList);
    let lhlElement = renderLHLStudentList.map((lhlStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{lhlStudent.lhlId}</td>
                <td>{lhlStudent.lhlName}</td>
                <td>{lhlStudent.lhlAge}</td>
                <td>{lhlStudent.lhlPhone}</td>
                <td>{lhlStudent.lhlEmail}</td>
                <td>{lhlStudent.lhlCreatedAt}</td>
                <td>{lhlStudent.lhlStatus}</td>
            </tr>
        )
    });
    return (
        <div>
            <h2>Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã Sinh Viên</th>
                        <th scope="col">Họ Tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Điện Thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng Thái</th>
                        <th scope="col">Chức năng</th>
                        <td>
                            Edit / Delete
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {lhlElement}
                </tbody>
            </table>

        </div>
    )
}
