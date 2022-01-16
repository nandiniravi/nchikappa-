import './Slokas.scss';
import data from '../constants'

const slokasDetails = data.slokasDetails;

const Slokas = () => {
    return(
        <div className='slokas-main'>
            <h2>Slokas</h2>
            {slokasDetails.map(each => {
                return(
                    <a href={each.link} target="_blank" rel="noreferrer" key={each.slokaName}>
                        <div className='slokas-sub'>
                        <i className="fa fa-file-pdf-o" style={{marginRight: "16px", marginTop: "2px"}}></i>{each.slokaName}
                        </div>
                    </a>                     
                );
            })}
        </div>
    );
}

export default Slokas;