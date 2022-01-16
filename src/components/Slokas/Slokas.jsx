import './Slokas.scss';
import data from '../constants'

const slokasDetails = data.slokasDetails;

const Slokas = () => {
    return(
        <div className='slokas-main'>
            <h2>Slokas</h2>
            {slokasDetails.map(each => {
                return(
                    <a href={each.link} target="_blank" rel="noreferrer">
                        <div className='slokas-sub'>
                        <i class="fa fa-file-pdf-o" style={{marginRight: "16px", marginTop: "2px"}}></i>{each.slokaName}
                        </div>
                    </a>                     
                );
            })}
        </div>
    );
}

export default Slokas;