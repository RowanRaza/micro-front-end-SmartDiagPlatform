import './Profile.css';

const Profile = ({ user = { nom: "Jean Dupont", role: "Administrateur" } }) => {
  const handlePasswordChange = () => {
    alert("Changement de mot de passe eh");
  };

  const handleLogout = () => {
    alert("Déconnexion...");
  };

  return (
    <div className="mon-compte-container">
      <h2>Mon compte</h2>

      <div className="info-section">
        <p><strong>Nom :</strong> {user.nom}</p>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Email :</strong> jeandupont@email.com</p>
        <p><strong>Statut :</strong> Actif</p>
      </div>

      <div className="action-section">
        <button onClick={handlePasswordChange} className="btn-action">
          Changer le mot de passe
        </button>

        <button onClick={handleLogout} className="btn-logout">
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Profile;
