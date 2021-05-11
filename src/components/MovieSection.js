
import Footer from './Footer';


export default function MovieSection() {
    return (
        <>
            <div className="designation">
                Selecione o(s) assento(s)
            </div>

            <div className="seats" >
                <div className="seat selected">01</div>
                <div className="seat available">01</div>
                <div className="seat unavailable">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
                <div className="seat">01</div>
            </div>

            <button className="booking">Reservar assento(s)</button>
            <Footer />
        </>
    );
}