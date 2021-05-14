import { useState } from 'react';

export default function InputInfo({ order, setOrder, id, index }) {
    
    const { compradores } = order;
    if(compradores[index] === undefined) {
        compradores[index] = {idAssento: id, name: "", cpf: ""}
    }
    const [inputValue, setInputValue] = useState({name:"", cpf:""})
    const { name, cpf } = inputValue;

    function handleOnChange(e, objKey) {

        const newOrder = {...order};
        const { value } = e.target
        const { compradores } = newOrder;
        compradores[index] = {...compradores[index], [objKey]: value}
        setInputValue({...inputValue, [objKey]: value})
        setOrder(newOrder)
    }
    
    return (
        <>
            {input('Nome do comprador:', name, handleOnChange, "Digite seu nome", "name")}
            {input('Cpf do comprador:', cpf, handleOnChange, "Digite seu cpf", "cpf")}
        </>
    );
}

function input(title, value, ChangeFunction, placeholder, objKey) {

    return (
            <div className="inputTitle">
                {title}
                <input placeholder={placeholder} value={value} onChange={(e) => ChangeFunction(e, objKey)}/>
            </div>
    );
}