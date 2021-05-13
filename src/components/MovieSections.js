import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SeatAvailability from './SeatAvailability';


export default function MovieSections({ order, setOrder, movieInfo, setMovieInfo }) {

    const {idSessao} = useParams();
    let history = useHistory();

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
    console.log(movieInfo)

    function sendOrder() {
        let verify = true;
        if(order.nomeComprador === "") {
            alert("Preencha o seu nome!");
            verify = false;
        } else if (order.cpf === "") {
            alert("Informe o seu CPF!");
            verify = false;
        } else if (order.ids === []) {
            alert("Escolha pelo menos 1 assento");
            verify = false;
        } 
        if(verify) {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, order);
		    request.then(history.push("/success"));
        }
    }

    return (
        <>
             <Header />
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

            <div className="inputTitle">
                Nome do comprador:
                <input placeholder="Digite seu nome" value={order.nomeComprador} onChange={(e) => setOrder({...order, nomeComprador: e.target.value})}/>
            </div>
            
            <div className="inputTitle">
                Nome do comprador:
                <input placeholder="Digite seu CPF" value={order.cpf} onChange={(e) => setOrder({...order, cpf: e.target.value})}/>
            </div>
            

            <button className="booking" onClick={sendOrder}>Reservar assento(s)</button>
            
            <Footer title={title} image={posterURL} weekday={weekday} name={name}/>
        </>
    );
}

