


export default function Footer({title, image, weekday, name}) {

    const movieInfo = (weekday === "") ? "" : `${weekday} - ${name}`
    
    return (
        <div className="filmDetail">
            <div className="coverDetail">
                <img src={image} alt={title} />
            </div>
            <div className="orderDescription">{title} <br/> {movieInfo}</div>
            {(weekday === "")  }
        </div>
    );
}