
import axios from 'axios';

export default function SendOrder(order, history) {
    
    const { compradores, ids } = order
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

//