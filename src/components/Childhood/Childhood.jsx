import './Childhood.scss';
// import pic from '../../assets/images/wallpaper.jpg';

const data = [
    { id:1,imgPath : pic1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    { id:2,imgPath : pic2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
];

const Childhood = () => {
    return(
        <div className='childhood-main'>
            <h2>His Childhood</h2>
            {data.map(each => {
                return(
                    <div className='childhood-sub' key={each.id}>
                        {/* <img src={each.imgPath} alt={each.imgPath}/> */}
                        <div><p>{each.text}</p></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Childhood;