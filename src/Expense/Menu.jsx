import { Link } from "react-router-dom";

function MenuExpense() {



    
    return (  <>
   <ul class="nav justify-content-center bg-light ">

  <li class="nav-item">
    <Link to="/expense/dashboard" className="nav-link" aria-current="page" >Dashboard</Link>
  </li>

  <li class="nav-item">
    <Link to="/expense/expense" class="nav-link">Expense</Link>
  </li>
  <li class="nav-item">
  <Link to="/expense/report" class="nav-link">Report</Link>  </li>

  <li class="nav-item">
  <Link to="/expense/type" class="nav-link">Type</Link>
  </li>

</ul>
    
    </>);
}

export default MenuExpense