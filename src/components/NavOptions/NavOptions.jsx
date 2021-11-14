import './NavOptions.scss';
import Card from '../Card/Card';

const NavOptions = () => {
    const options = [
        {
            title: 'About Him',
            link: '/about-him'
        },
        {
            title: 'Religion',
            link: '/religion'
        },
        {
            title: 'e-Book',
            link: '/ebook'
        },
        {
            title: 'Gallery',
            link: '/gallery'
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