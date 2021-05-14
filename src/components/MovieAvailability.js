import { useParams } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';

import Footer from './Footer';
import DaysAvailable from "./AuxiliaryFunctions/DaysAvailable";

export default function MovieAvaiability({ setIsHomePage }) {

    const {idFilme} = useParams();
    const [movie, setMovie] = useState([]);

   useEffect(() => {
        setIsHomePage(false)
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`);
		requisicao.then(resposta => setMovie(resposta.data));
	}, [idFilme, setIsHomePage]);
    
    const { title, posterURL, days } = movie

    if ( days === undefined) {
        return "Carregando";
    }

    return (
        <>
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

