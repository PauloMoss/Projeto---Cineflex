

export default function SeatSubtitles() {
    return(
        <div className="seatIdentification">
            <div className="seatStatus">
                <div className="seat selected"></div>
                Selecionado
            </div>
            <div className="seatStatus">
                <div className="seat available"></div>
                Disponivel
            </div>
            <div className="seatStatus">
                <div className="seat unavailable"></div>
                Indisponivel
            </div>
        </div>
);
}