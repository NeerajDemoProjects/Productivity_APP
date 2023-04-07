import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return ( <>
    
    <nav class="navbar navbar-dark bg-danger">

    <Link to="/" class="navbar-brand">
        
  <GridViewIcon style={{color:"white"}}></GridViewIcon>
        {props.name}</Link>
</nav>
    </> );
}

export default NavBar;