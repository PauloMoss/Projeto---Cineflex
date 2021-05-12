import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import DaysAvailable from "./DaysAvailable";

export default function MovieAvaiability() {

    const {idFilme} = useParams();
    const [movieDays, setMovieDays] = useState([]);

   useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(resposta => setMovieDays(resposta.data.days));
        console.log(movieDays)
	}, []);
    console.log(movieDays)

    if ( movieDays === []) {
        return "Carregando";
    }

    return (
        <>
            <Header />
            <div className="designation">
                Selecione o horário
            </div>

            <div className="sectionAvaiability" >
                {movieDays.map(d => (
                    <DaysAvailable daysDetails={d}/>
                ))}
            </div>
            <Footer />
        </>
    );
}