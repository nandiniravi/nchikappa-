import './NavOptions.scss';
import Card from '../Card/Card';

const NavOptions = () => {
    const options = [
        {
            title: 'His Childhood',
            link: '/childhood'
        },
        {
            title: 'His Service',
            link: '/service'
        },
        {
            title: 'His Commendations',
            link: '/commendations'
        },
        {
            title: 'His Vision',
            link: '/vision'
        }
    ];
    return (
        <div className='nav-options'>
            {options.map(each => {
                return(
                    <Card title={each.title} link={each.link} key={each.title}></Card>
                );
            })}
        </div>
    );
}

export default NavOptions;