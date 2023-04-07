import AppKanban from './AppKanban';
import expense from './image/expense.png';
import health from './image/health.png';
import communication from './image/communication.png'
import learning from "./image/learning.png"
import project from "./image/Project.png"
import dairy from './image/dairy.png'
import settings from './image/settings.png'
import { Link } from 'react-router-dom';

function MainBoard() {
    return ( <>




    
    <div className="row">

        <div className="col-3">
            
        <Link to="/expense" style={{ textDecoration: 'none'}}  state={{"appname":"Expense"}}> <AppKanban name={'Expense'} image={expense}></AppKanban> </Link>
           </div>


        
        <div className="col-3">
        <Link to="health" style={{ textDecoration: 'none'}} app="Health">
        <AppKanban name={'Health'} image={health}></AppKanban>
            </Link>   </div>
        <div className="col-3">
            
            <Link to="language" style={{ textDecoration: 'none'}} app="Language">
            <AppKanban name={'Language'} image={communication}></AppKanban>

            </Link>
            </div>
        <div className="col-3">
            
            <Link to="Learning" style={{ textDecoration: 'none'}} app="Learning">
            <AppKanban name={'Learning'} image={learning}></AppKanban>

            </Link>
          </div>
        <div className="col-3">
            
            <Link to="Project" style={{ textDecoration: 'none'}} app="Learning">
            <AppKanban name={'Project'} image={project}></AppKanban>
            </Link>
            
            </div>
        <div className="col-3">
            <Link to="Dairy" style={{ textDecoration: 'none'}}  app="Dairy">
            <AppKanban name={'Dairy'} image={dairy}></AppKanban>
            </Link>
            
           </div>

    </div>
    </> );
}

export default MainBoard