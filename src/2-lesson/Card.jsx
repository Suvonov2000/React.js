const Card = (props) =>{
    return(
        <div className="flower_card">
        <div className="flower-wrapper">
            <img 
            className="flower-img"
            src={props.img}  alt="Flower-name" />
        </div>
        <div className="detail-wrapper">
                <h3>Flower Name:</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
    </div>

    )
}

export default Card;