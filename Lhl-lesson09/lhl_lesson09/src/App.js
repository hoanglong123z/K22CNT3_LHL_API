import './App.css';
import { React, useEffect, useState } from 'react'
import axios from "axios";
import LHLStudentList from './Component/LHLStudentList';

function App() {
  const [lhlStudentList, setLHLStudentList] = useState([]);
  const LhlGetStudent = async () => {
    try {
      const response = await axios.get("https://666a5c607013419182cefc68.mockapi.io/api/lhlv1/lhlStudent");
      setLHLStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    LhlGetStudent();
  }, []);
  return (
    <div className='container border mt-5 p-3'>
      <h1 className='text-center my-3'>Xử Lý chức năng CRUD - HOOK - API</h1>
      <hr />
      <LHLStudentList renderLHLStudentList = {lhlStudentList}/>
    </div>
  )
}

export default App;
