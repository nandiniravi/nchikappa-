import './Herobanner.scss';
import bgimg from '../../assets/images/wallpaper.jpg';
console.log(bgimg);
const Herobanner = () => {
    return(
        <div style={{backgroundImage: `url(${bgimg})`}} className='hero-banner'>
        </div>
    );
}

export default Herobanner;