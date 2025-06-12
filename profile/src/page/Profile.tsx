import './Profile.css';

const Profile = ({ user = { nom: "Jean Dupont", role: "Administrateur" }, onLogout=()=>{} }) => {
  const handlePasswordChange = () => {
    alert("Changement de mot de passe eh");
  };


  return (
    <div className="mon-compte-container">
      <h2>Mon compte</h2>

      <div className="info-section">
        <p><strong>Nom :</strong> {user.nom}</p>
        <p><strong>Rôle :</strong> {user.role}</p>
        <p><strong>Statut :</strong> Actif</p>
      </div>

      <div className="action-section">
        <button onClick={handlePasswordChange} className="btn-action">
          Changer le mot de passe
        </button>

        <button onClick={onLogout} className="btn-logout">
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

export default Profile;
