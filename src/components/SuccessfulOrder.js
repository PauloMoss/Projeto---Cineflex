import {Link} from 'react-router-dom';

export default function SuccessfulOrder({ order, setOrder, movieInfo }) {
    
    const { movie, day, name, seats } = movieInfo;
    const { compradores, ids } = order
    const seatName = ids.map(i => seats.find(j => j.id === i))

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
                {seatName.map((s,i) => <div key={i} className="description">assento {s.name}</div>)}
            </div>
            <div className="info" >
                {compradores.map((c,i) => (
                    <>
                        <div key={i} className="title">Comprador {i+1}</div>
                        <div key={i+100} className="description">Nome: {c.name}</div>
                        <div key={i+200} className="description">CPF: {c.cpf}</div>
                    </>
                    ))}
            </div>

            <Link to="/"><button className="backHome" onClick={() => setOrder({compradores: [], ids: []})}>Voltar pra Home</button></Link>
        </>
    );
}