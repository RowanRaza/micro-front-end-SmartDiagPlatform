import { useState, useEffect } from "react";
import './UserForm.css';

const UserForm = ({ selectedUser, onSave }: {
  selectedUser: any,
  onSave: (user: any) => void
}) => {
  const [form, setForm] = useState({ id: null, nom: "", motDePasse: "", role: "" });

  useEffect(() => {
    if (selectedUser) {
      setForm(selectedUser);
    } else {
      clearForm()
    }
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    clearForm();
  };

  const clearForm = () => {
    setForm({ id: null, nom: "", motDePasse: "", role: "" });
  }

  return (
    <form className="user-form-container" onSubmit={handleSubmit}>
        <div className="inputs">
            <input type="text" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} required />
            <input type="text" name="motDePasse" placeholder="Mot de passe" value={form.motDePasse} onChange={handleChange} required />
            <input type="text" name="role" placeholder="Rôle" value={form.role} onChange={handleChange} required />
        </div>
        <div className="actions">
            <button type="reset" onClick={clearForm}>Annuler</button>
            <button type="submit">{form.id ? "Modifier" : "Ajouter"}</button>
        </div>
    </form>
  );
};

export default UserForm;
