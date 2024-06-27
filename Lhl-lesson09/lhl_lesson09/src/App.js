import './App.css';
import { React, useEffect, useState } from 'react'
import axios from "axios";
import LHLStudentList from './Component/LHLStudentList';

function App() {
  const [lhlStudentList, setLHLStudentList] = useState([]);
  const LhlGetStudent = async () => {
    try {
      const response = await axios.get("https://666c2e2e49dbc5d7145cfd4f.mockapi.io/lhlapi/lhlv1/LhlProduct");
      setLHLStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    LhlGetStudent();
  }, []);
  return (
    <div className='container border my-3'>
      <h1 className='text-center my-3'>Làm Việc Với API</h1>
      <hr />
      <LHLStudentList renderLHLStudentList = {lhlStudentList}/>
    </div>
  )
}

export default App;
