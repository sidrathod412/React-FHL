import { NavLink } from 'react-router-dom';
import './App.css'

const MainNavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/jsx">Into to JSX</NavLink>
            <NavLink to="/eventhandling">Event Handling</NavLink>
            <NavLink to="/fetch">Calling Apis Fetch</NavLink>
            <NavLink to="/axois">Calling Apis Axios</NavLink>
            <NavLink to="/propsandstate">Props and State</NavLink>
            <NavLink to="/simplecomponent">Simple Component</NavLink>
            <NavLink to="/statemanagemet">State Management</NavLink>
        </nav>
    );
}

export default MainNavBar;
