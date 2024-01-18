import {CDN_URL} from "../utils/constants"

const RestroCard = (restObj) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = restObj.restObj.info;
    return (
        <div className="restro-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="restro-logo" src={CDN_URL + cloudinaryImageId}></img>
            <div className="container__text">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{avgRating + ' Stars'}</h4>
                <h4>{sla.slaString}</h4>
            </div>
            
        </div>
    )
}

export default RestroCard;