import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

import SendOrder from './AuxiliaryFunctions/SendOrder';
import InputInfo from './AuxiliaryFunctions/InputInfo';
import Footer from './Footer';
import SeatAvailability from './SeatAvailability';


export default function MovieSections({ order, setOrder, movieInfo, setMovieInfo }) {

    const {idSessao} = useParams();

   useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => setMovieInfo(resposta.data));
	}, [idSessao, setMovieInfo]);

    if ( movieInfo === null) {
        return "Carregando";
    }
    const { seats, name } = movieInfo;
    const { title, posterURL } = movieInfo.movie
    const { weekday } = movieInfo.day

    return (
        <>
            <div className="designation">
                Selecione o(s) assento(s)
            </div>

            <div className="seats" >
                {seats.map(a => (
                    <SeatAvailability orderDetail={a} order={order} setOrder={setOrder} key={a.id} name={a.name} available={a.isAvailable}/>
                ))}
            </div>
            <div className="seatIdentification">
                <div className="seatStatus">
                    <div className="seat selected"></div>
                    Selecionado
                </div>
                <div className="seatStatus">
                    <div className="seat available"></div>
                    Disponivel
                </div>
                <div className="seatStatus">
                    <div className="seat unavailable"></div>
                    Indisponivel
                </div>
            </div>
            
            {order.ids.map((item, i) => (
                <InputInfo  id={item} index={i} order={order} setOrder={setOrder} />
            ))}
            <button className="booking" onClick={() => SendOrder(order)}>Reservar assento(s)</button>
            
            <Footer title={title} image={posterURL} weekday={weekday} name={name}/>
        </>
    );
}