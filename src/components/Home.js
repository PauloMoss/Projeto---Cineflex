import { Link } from "react-router-dom";
import { useEffect , useState} from 'react';
import axios from 'axios';
import Header from './Header';

export default function Home() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
		requisicao.then(resposta => setMovies(resposta.data));
	}, []);

    if ( movies === []) {
        return "Carregando";
    }

    return (
        <>
            <Header />
            <div className="designation">
                Selecione um filme
            </div>

            <div className="movies">
                {movies.map (m => (
                    <Link to= {`/sessoes/${m.id}`} key={`${m.id}`}>
                        <div className="movie" >
                            <img src={m.posterURL} alt={m.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}