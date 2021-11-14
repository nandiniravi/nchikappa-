import {NavLink} from 'react-router-dom';
import './NavBarInSubPage.scss';
import data from '../constants.js';

const navBarOptions = data.navBarOptions;

const NavBarInSubPage = (props) => {
    const page = props.page;
    
    return (
        <div className='navbar-subpage'>
            {navBarOptions[page].map(each => {
                return <NavLink to={each.link} key={each.subPageTitle} activeClassName='selected'>
                    {(each.subPageTitle === 'About Him') || (each.subPageTitle === 'Religion' )
                    ? <i className="fa fa-arrow-circle-left back-arrow"></i>
                    : null}
                    {each.subPageTitle}
                    </NavLink>
            })}
        </div>
    );
};

export default NavBarInSubPage;