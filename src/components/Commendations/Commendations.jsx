import './Commendations.scss';
import data from '../constants'

const commendationsDetails = data.commendationsList;

const Commendations = () => {
    return(
        <div className='commendations-main'>
            <h2>Commendations</h2>
            {commendationsDetails.map(each => {
                return(
                    <a href={each.link} target="_blank" rel="noreferrer"><div className='commendations-sub'>
                     {each.by}, {each.relation}
                    </div></a>
                     
                );
            })}
        </div>
    );
}

export default Commendations;