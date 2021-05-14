import { Link, useHistory } from 'react-router-dom';

export default function Header({ isHomePage }) {
    const history = useHistory();

    return (
        <div className="header">
            {isHomePage ? "" : <ion-icon onClick={history.goBack} name="chevron-back-sharp"></ion-icon>}
            <Link to="/"><h1>Cineflex</h1></Link>
        </div>
    );
}