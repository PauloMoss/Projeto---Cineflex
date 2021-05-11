import { Link, useParams } from "react-router-dom";

import Footer from './Footer';


export default function MovieAvaiability() {

    const { filmID } = useParams()

    return (
        <>
            <div className="designation">
                    Selecione o horário
                </div>

                
                <div className="sectionAvaiability" >
                        <div className="sectionDay">Sexta-feira - 13/05/2021</div>
                        <div className="sectionHour">
                        <Link to="/sessao"><button>15:00</button></Link>
                        </div>
                    </div>
                
                <Footer />
        </>
    );
}