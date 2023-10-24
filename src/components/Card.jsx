import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

function Card(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props;

    return (
        <div className="card">
            <div className="card--img">
                <img src={imageUrl} alt={title} className="card--img--photo"></img>
            </div>
            <div className="card--info">
                <div className="card--location">
                    <FontAwesomeIcon icon={faLocationDot} className="card--pin" />
                    <h1>{location}</h1>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{title}</h1>
                <h3>{startDate} - {endDate}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
    googleMapsUrl: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string, 
}

export default Card