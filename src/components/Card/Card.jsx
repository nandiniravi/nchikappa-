import './Card.scss';
import {Link} from 'react-router-dom';

const Card = (props) => {
    if(props.title === 'Introduction' || props.title === 'Impression' || props.title === 'e-book in English' || props.title === 'e-book in Kannada, Tamil' ){
        return(
            <a href={props.link} target="_blank" rel="noreferrer">
                <div className='card'>
                    <p>{props.title}</p>
                </div>
            </a>
        );
    }

    return(
        <Link to={props.link}>
            <div className='card'>
                <p>{props.title}</p>
            </div>
        </Link>
    );
}

export default Card;