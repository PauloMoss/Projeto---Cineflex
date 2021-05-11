import { Link } from "react-router-dom";
import { useEffect , useState} from 'react';
import axios from 'axios';

export default function Home() {

    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		requisicao.then(resposta => {
			setMovies(resposta.data);
		});
	}, []);

    console.log(movies)

    if ( movies === []) {
        return <div>Carregando</div>;
    }

    return (
        <>
            <div className="designation">
                Selecione um filme
            </div>

            <div className="movies">
                {movies.map (m => (
                    <Link to= {`/filme/${m.id}`}>
                        <div className="movie" key={`${m.id}`}>
                            <img src={m.posterURL} alt={m.title} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}