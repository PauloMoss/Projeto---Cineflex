import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SeatAvailability from './SeatAvailability';


export default function MovieSections() {

    const {idSessao} = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [order, setOrder] = useState({name: "", cpf: "", ids: []})


    console.log(order)
   useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => setMovieInfo(resposta.data));
	}, [idSessao]);

    if ( movieInfo === null) {
        return "Carregando";
    }
    const { seats } = movieInfo;

    function sendOrder() {
        if(order.name === "") {
            alert("Preencha o seu nome!");
            return;
        } else if (order.cpf === "") {
            alert("Informe o seu CPF!");
            return;
        } else if (order.ids === []) {
            alert("Escolha pelo menos 1 assento");
            return;
        } else {
            const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, order);
		    request.then(console.log(order));
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
            <input placeholder="Digite seu nome" value={order.name} onChange={(e) => setOrder({...order, name: e.target.value})}/>
            <input placeholder="Digite seu CPF" value={order.cpf} onChange={(e) => setOrder({...order, cpf: e.target.value})}/>

            <button className="booking" onClick={sendOrder}>Reservar assento(s)</button>
            <Footer />
        </>
    );
}

