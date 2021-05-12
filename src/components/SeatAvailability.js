import { useState } from 'react';


export default function SeatAvailability(props) {
    const { key, name, available } = props;
    const [seatInfo, setSeatInfo] = useState((available) ? "seat available" : "seat unavailable")
   
    function selectSeat() {

        if(seatInfo === "seat available") {
            setSeatInfo("seat selected")
        } else if(seatInfo === "seat selected") {
            setSeatInfo("seat available")
        }
    }

    return (
        <div key={key} className={seatInfo} onClick={selectSeat}>{name}</div>
    );
}