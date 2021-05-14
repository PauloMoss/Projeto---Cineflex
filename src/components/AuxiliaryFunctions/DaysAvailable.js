import { Link } from "react-router-dom";

export default function DaysAvailable(props) {

    const { daysDetails } = props;
    const { id, weekday, date , showtimes } = daysDetails;
    
    return (
        <>
            <div className="sectionDay" key={id}>{weekday} - {date}</div>
            <div className="sectionHour" >
                {showtimes.map(i => (
                    <Link to= {`/assentos/${i.id}`} key={`${i.id}`}>
                        <button>{i.name}</button>
                    </Link>
                ))}
            </div>
        </>
    );
}

