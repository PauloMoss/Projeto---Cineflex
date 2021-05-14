import { Link } from "react-router-dom";
import { useEffect , useState} from 'react';
import axios from 'axios';

export default function Home({ setIsHomePage }) {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        setIsHomePage(true)
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
		requisicao.then(resposta => setMovieList(resposta.data));
	}, [setIsHomePage]);

    if ( movieList === []) {
        return "Carregando";
    }

    return (
        <>
            <div className="designation">
                Selecione um filme
            </div>
            <div className="movies">
                {movieList.map (m => (
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