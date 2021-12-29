import './Herobanner.scss';
import bgimg from '../../assets/images/wallpaper-home.jpg';
console.log(bgimg);
const Herobanner = () => {
    return(
        <div style={{backgroundImage: 'linear-gradient(#1FBFC5,#F3B83B)'}}>
            <div style={{backgroundImage: `url(${bgimg})`}} className='hero-banner'>
            </div>
        </div>
    );
}

export default Herobanner;