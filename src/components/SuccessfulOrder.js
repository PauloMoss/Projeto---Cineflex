import {Link} from 'react-router-dom';

export default function SuccessfulOrder({ order, setOrder, movieInfo, setMovieInfo }) {
    
    const { movie, day, name, seats } = movieInfo;
    const { nomeComprador, cpf, ids } = order
    const seatName = ids.map(i => seats.find(j => j.id === i))
    console.log(seatName)
    return (
        <>
            <div className="designation succssesfully">
                Pedido feito com sucesso!
            </div>

            <div className="info" >
                <div className="title">Filme e sessão</div>
                <div className="description">{movie.title} <br />{day.date} {name}</div>
            </div>
            <div className="info" >
                <div className="title">Ingressos</div>
                {seatName.map(i => <div className="description">assento {i.name}</div>)}
            </div>
            <div className="info" >
                <div className="title">Comprador</div>
                <div className="description">{nomeComprador}</div>
                <div className="description">{cpf}</div>
            </div>

            <Link to="/"><button className="booking" onClick={() => setOrder({nomeComprador: "", cpf: "", ids: []})}>Voltar pra Home</button></Link>
        </>
    );
}