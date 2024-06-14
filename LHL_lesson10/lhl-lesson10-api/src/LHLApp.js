import { useEffect, useState } from 'react';
import './App.css';
import LHLCategory from './Component/LHLCategory';
import axios from "./API/LHLAPI";
import LHLCategoryForm from './Component/LHLCategoryForm';


function LHLApp() {
  // lấy dữ liệu từ api
  const [lhlCategories, setLhlCategories] = useState([]);

  const getCategories = async () => {
    try {
      const lhlCateResponse = await axios.get("LhlCategory");
      setLhlCategories(lhlCateResponse.data);
    } catch (error) {
      console.log("lỗi:", error);
    }
  }

  useEffect(() => {
    getCategories();
    console.log("lhlCategories:", lhlCategories);
  }, [])

  //trạng thái form
  const [lhlCategoryIsForm, setLhlCategoryIsForm] = useState(false);

  const lhlHandleAddNew = (param) => {
    setLhlCategoryIsForm(param);
  }
  const lhlHandleCategoryCloseForm = (param) => {
    setLhlCategoryIsForm(param);
  }
  const lhlHandleCategorySubmit = (param) => {
    let id = lhlCategories[lhlCategories.length - 1].lhlId;
    console.log("Mã:", id);
    param.lhlId = id + 1;
    lhlCategories.push(param);
    setLhlCategories((prev) => {
      return [...prev];
    })
    setLhlCategoryIsForm(false);
  }
  return (
    <div className="container border my-3">
      <h1>Lê Hoàng Long - Call API</h1>

      <LHLCategory renderLHLCategories={lhlCategories}
        onAddNew={lhlHandleAddNew} />
      <hr />
      {
        lhlCategoryIsForm === true ? <LHLCategoryForm
          oncloseForm={lhlHandleCategoryCloseForm}
          onCategorySubmit={lhlHandleCategorySubmit} /> : ""
      }

    </div>
  );
}
export default LHLApp;
