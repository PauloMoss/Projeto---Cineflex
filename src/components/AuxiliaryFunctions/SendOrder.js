import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function SendOrder(order) {
    
    const { compradores, ids } = order
    const history = useHistory();
    let verify = true;

    compradores.forEach(c => {
        if(c.name === "") {
            alert("Preencha o seu nome!");
            verify = false;
            return;
        } else if (c.cpf === "") {
            alert("Informe o seu CPF!");
            verify = false;
        }
    })
    if (ids.length === 0) {
        alert("Escolha pelo menos 1 assento");
        verify = false;
    }
    if(verify) {
        const request = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, order);
        request.then(history.push("/success"));
    }
}

/*const { compradores, ids } = order

 const history = useHistory();

    //history.push("/success")

    */