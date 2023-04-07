import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuExpense from "./Menu";
import NavBar from "../MainBoard/Navbar";
import ExpenselistView from "./ExpenselistView";
import ExpenseListView from "./ExpenselistView";
import ExpenseDashboard from "./Dashboard";
import ExpenseReport from "./Report";
import ExpenseType from "./type";

function ExpenseMain() {

    return (  <>
        <NavBar name="Expense"></NavBar>
    

    <MenuExpense></MenuExpense>
    <div>
        
    <Routes>
    <Route path="expense" element={<ExpenseListView></ExpenseListView>}></Route>
    <Route path="dashboard" element={<ExpenseDashboard></ExpenseDashboard>}></Route>
    <Route path="report" element={<ExpenseReport></ExpenseReport>}></Route>
    <Route path="type" element={<ExpenseType></ExpenseType>}></Route>



    </Routes>

    </div>
    </>);
}

export default ExpenseMain