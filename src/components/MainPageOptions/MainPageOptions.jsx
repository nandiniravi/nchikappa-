import './MainPageOptions.scss';
import Card from '../Card/Card';
import data from '../constants.js';

const options = data.options;
console.log(options);

const NavOptions = (props) => {
    const page = props.page;
    return (
        <div className='main-options'>
            <p style={{marginTop: "24px"}}>{options[page].intro}</p>
            <div className='nav-options'>
                {options[page].pageOptions.map(each => {
                    return(
                        <Card title={each.title} link={each.link} key={each.title}></Card>
                    );
                })}
            </div>
        </div>
    );
}

export default NavOptions;