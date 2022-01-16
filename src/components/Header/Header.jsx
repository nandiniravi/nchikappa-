import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div className='header'>
            {/* <h1>|| ॐ नमो नारायणा ||</h1> */}
            <h1>Narayana<span> - </span> Memoir of a Sadhaka</h1>
            <div className='header-navbar'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/about-him'>About Him</NavLink>
                <NavLink exact activeClassName='selected' to='/religion'>Religion</NavLink>
                {/* <NavLink exact activeClassName='selected' to='/ebook'>e-Book</NavLink> */}
                <a href="https://memoirofasadhaka.s3.ap-south-1.amazonaws.com/Adv.+O+Sham+Bhat.pdf" target="_blank" rel="noreferrer">e-Book</a>
                <NavLink exact activeClassName='selected' to='/gallery'>Gallery</NavLink>
            </div>
        </div>
    );
}

export default Header;