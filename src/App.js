import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import MainBoard from './MainBoard/MainBoard';
import NavBar from './MainBoard/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseMain from './Expense/ExpenseList';
import HealthMain from './Health/MainHealth';
import MainLanguage from './Language/Language';
import MainLearning from './Learning/MainLearning';
import MainProject from './Project/MainProject';
import MainDairy from './Dairy/MainDairy';

function App() {
  return (
    <>
    

<BrowserRouter>
      <Routes>
        <Route path="/" element={
        <div >
      <MainBoard></MainBoard>
         </div> }>

                  </Route>
                  <Route path="/expense/*" element={<ExpenseMain></ExpenseMain>}> </Route>

                  <Route path="/health" element={<HealthMain></HealthMain>}> </Route>
                  <Route path="/language" element={<MainLanguage></MainLanguage>}> </Route>
                  <Route path="/learning" element={<MainLearning></MainLearning>}> </Route>
                  <Route path="/project" element={<MainProject></MainProject>}> </Route>

                  <Route path="/dairy" element={<MainDairy></MainDairy>}> </Route>








      </Routes>
    </BrowserRouter>



    </>

  );
}

export default App;
