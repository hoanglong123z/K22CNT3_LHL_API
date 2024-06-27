import React from 'react'

export default function LHLStudentList({ renderLHLStudentList }) {
    console.log("Data:", renderLHLStudentList);
    let lhlElement = renderLHLStudentList.map((lhlStudent, index) => {
        return (
            <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{lhlStudent.UserName}</td>
                <td>{lhlStudent.PassWord}</td>
                <td>{lhlStudent.Avatar}</td>
                <td>{lhlStudent.Phone}</td>
                <td>{lhlStudent.lhlid}</td>
            </tr>
        )
    });
    return (
        <div className='Row'>
            <h2>Danh Sách Sinh Viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">UserName</th>
                        <th scope="col">PassWord</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Id</th>
                        <th scope="col">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lhlElement}
                </tbody>
            </table>

        </div>
    )
}
