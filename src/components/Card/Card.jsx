import './Card.scss';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return(
        <Link to={props.link}>
            <div className='card'>
                <p>{props.title}</p>
            </div>
        </Link>
    );
}

export default Card;