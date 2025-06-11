import './login.css'
import coverImg from '../assets/img/cover.png';
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

export default () => {
    return (
        <div id="main-container">
            <div className="container">
                <div className="img-box">
                        <img src={coverImg} className="img img-cover" alt="cover image" />
                        <div className="desc-box">
                            <h1> Le diagnostic intelligent à portée de PME. </h1>
                            <p>Surveillez vos équipements, anticipez les pannes, gagnez en sérénité.</p>
                        </div>
                </div>
                <div className="form-box">
                    <div className="desc-box">
                        <h1>Re-bonjour!</h1>
                        <p>Connectez-vous et profiter de toutes nos merveilleuse fonctionnalités.</p>
                    </div>
                    <form action="">
                        <div className="input-box">
                            <input type="text" placeholder="Nom d'utilisateur" required/>
                            <FaUser className='icon'/>
                        </div>
                        <div className="input-box">
                            <input type="Password" placeholder="Mot de passe" required/>
                            <FaLock className='icon'/>
                        </div>
                        <button className='btn' type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>    
    )
}