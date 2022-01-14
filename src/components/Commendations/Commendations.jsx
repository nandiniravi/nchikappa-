import './Commendations.scss';
import pic from '../../assets/images/wallpaper.jpg';
import data from '../constants'

const commendationsDetails = data.commendationsList;

const Commendations = () => {
    return(
        <div className='commendations-main'>
            <h2>Commendations</h2>
            {commendationsDetails.map(each => {
                return(
                    <a href={each.link} target="_blank"><div className='commendations-sub'>
                     {each.by}, {each.relation}
                    </div></a>
                     
                );
            })}
        </div>
    );
}

export default Commendations;