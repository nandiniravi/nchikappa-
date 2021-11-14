import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            <h1>|| ॐ नमो नारायणा ||</h1>
            <div className='header-navbar'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/about-him'>About Him</NavLink>
                <NavLink exact activeClassName='selected' to='/religion'>Religion</NavLink>
                <NavLink exact activeClassName='selected' to='/ebook'>e-Book</NavLink>
                <NavLink exact activeClassName='selected' to='/gallery'>Gallery</NavLink>
            </div>
        </div>
    );
}

export default Header;