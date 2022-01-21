import './NavOptions.scss';
import Card from '../Card/Card';

const NavOptions = () => {
    const options = [
        {
            title: 'About Narayana',
            link: '/about-him'
        },
        {
            title: 'Devotional',
            link: '/religion'
        },
        {
            title: 'e-Book',
            link: '/ebook'
        },
       
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