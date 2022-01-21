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
            title: 'e-Book (in English)',
            link: 'https://narayanamantra.s3.ap-south-1.amazonaws.com/ebook/01_Naryan-English.pdf'
        },
        {
            title: 'e-Book (in Kannada, Tamil)',
            link: 'https://narayanamantra.s3.ap-south-1.amazonaws.com/ebook/02_Narayan-KannadaTamil.pdf'
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