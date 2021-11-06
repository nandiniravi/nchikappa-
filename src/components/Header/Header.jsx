import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            <h1>|| ॐ नमो नारायणाय ||</h1>
            <div className='navbar'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/childhood'>Childhood</NavLink>
                <NavLink exact activeClassName='selected' to='/service'>Service</NavLink>
                <NavLink exact activeClassName='selected' to='/commendations'>Commendations</NavLink>
                <NavLink exact activeClassName='selected' to='/vision'>Vision</NavLink>
            </div>
        </div>
    );
}

export default Header;