import { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function SeatAvailability(props) {

    const { orderDetail, setOrder, order } = props
    const { compradores, ids } = order
    const { id, name, isAvailable } = orderDetail;
    const [seatInfo, setSeatInfo] = useState((isAvailable) ? "seat available" : "seat unavailable")
   
    function selectSeat() {

        if(seatInfo === "seat available") {
            setSeatInfo("seat selected")
            setOrder({...order, ids: [...order.ids, id]})
        } else if(seatInfo === "seat selected") {
            confirmAlert({
                title: 'Confirm to submit',
                message: 'Gostaria realmente de remover o assento e apagar os dados?',
                buttons: [
                    {label: 'Sim', onClick: () => {
                        setSeatInfo("seat available")
                        setOrder({compradores: compradores.filter(i => (i.idAssento !== id)), ids: ids.filter(i => (i !== id))})
                    }
                    },
                    {label: 'Nao', onClick: () => {}}
                ]});
        }
    }

    return (
        <div className={seatInfo} onClick={selectSeat}>{name}</div>
    );
}