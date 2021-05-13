import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import DaysAvailable from "./DaysAvailable";

export default function MovieAvaiability() {

    const {idFilme} = useParams();
    const [movie, setMovie] = useState([]);

   useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(resposta => setMovie(resposta.data));
	}, [idFilme]);

    
    const { title, posterURL, days } = movie

    if ( days === undefined) {
        return "Carregando";
    }

    return (
        <>
            <Header />
            <div className="designation">
                Selecione o horário
            </div>
            <div className="sectionAvaiability" >
                {days.map(d => (
                    <DaysAvailable daysDetails={d} key={d.id} />
                ))}
            </div>
            
            <Footer title={title} image={posterURL} weekday="" name="" />
        </>
    );
}

