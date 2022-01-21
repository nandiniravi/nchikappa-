import {useState} from 'react';
import './Header.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false);

    const MenuBar = 
        <div className='show-menu' onClick={() => setShowMobMenu(true)}>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
            <div className='menu-bar'></div>
        </div>;
    
    
    const Menu = 
        <div className='menu-bg' onClick={() => setShowMobMenu(false)}>
            <div className='mobile-navbar'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/about-him'>About Him</NavLink>
                <NavLink exact activeClassName='selected' to='/religion'>Religion</NavLink>
                <a href="https://memoirofasadhaka.s3.ap-south-1.amazonaws.com/Adv.+O+Sham+Bhat.pdf" target="_blank" rel="noreferrer">e-Book</a>
                <NavLink exact activeClassName='selected' to='/gallery'>Gallery</NavLink>
            </div>
        </div>;    
    
    return(
        <div className='header'>
            <h1>Narayana<span> - </span> Memoir of a Sadhaka</h1>
            {MenuBar}
            {showMobMenu ? Menu : null}
            <div className='header-navbar'>
                <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
                <NavLink exact activeClassName='selected' to='/about-him'>About Narayana</NavLink>
                <NavLink exact activeClassName='selected' to='/religion'>Devotional</NavLink>
                {/* <a href="https://narayanamantra.s3.ap-south-1.amazonaws.com/ebook/01_Naryan-English.pdf" target="_blank" rel="noreferrer">e-Book</a> */}
                <NavLink exact activeClassName='selected' to='/ebook'>e-Book</NavLink>
            </div>
        </div>
    );
}

export default Header;