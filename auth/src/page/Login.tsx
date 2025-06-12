import './login.css';
import coverImg from '../assets/img/cover.png';
import { FaLock, FaUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext'; 

export default function Login({onLogged}: {onLogged: () => void}) {
  const { login, isAuthenticated } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated)
        onLogged()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await login(username, password)
      onLogged();
    } catch (err) {
      setError("Nom d'utilisateur ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="main-container">
      <div className="container">
        <div className="img-box">
          <img src={coverImg} className="img img-cover" alt="cover image" />
          <div className="desc-box">
            <h1>Le diagnostic intelligent à portée de PME.</h1>
            <p>Surveillez vos équipements, anticipez les pannes, gagnez en sérénité.</p>
          </div>
        </div>
        <div className="form-box">
          <div className="desc-box">
            <h1>Re-bonjour!</h1>
            <p>Connectez-vous et profitez de toutes nos merveilleuses fonctionnalités.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FaLock className="icon" />
            </div>

            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
