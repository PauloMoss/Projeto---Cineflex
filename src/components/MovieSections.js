import { useParams, Link } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SeatAvailability from './SeatAvailability';


export default function MovieSections() {

    const {idSessao} = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    

   useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
		requisicao.then(resposta => setMovieInfo(resposta.data));
	}, []);

    if ( movieInfo === null) {
        return "Carregando";
    }
    const { id, day, movie, seats } = movieInfo;

    return (
        <>
             <Header />
            <div className="designation">
                Selecione o(s) assento(s)
            </div>

            <div className="seats" >
                {seats.map(a => (
                    <SeatAvailability key={a.id} name={a.name} available={a.isAvailable}/>
                ))}
            </div>

            <button className="booking">Reservar assento(s)</button>
            <Footer />
        </>
    );
}

