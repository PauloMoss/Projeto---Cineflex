import { useState } from 'react';


export default function SeatAvailability(props) {
    const { orderDetail, setOrder, order } = props
    const { id, name, isAvailable } = orderDetail;
    const [seatInfo, setSeatInfo] = useState((isAvailable) ? "seat available" : "seat unavailable")
   
    function selectSeat() {

        if(seatInfo === "seat available") {
            setSeatInfo("seat selected")
            setOrder({...order, ids: [...order.ids, id]})
        } else if(seatInfo === "seat selected") {
            setSeatInfo("seat available");
            setOrder({...order, ids: order.ids.filter(i => (i !== id))})
        }
    }

    return (
        <div className={seatInfo} onClick={selectSeat}>{name}</div>
    );
}