import { useState } from "react";
import UserForm from "../component/user-form/UserForm";
import UserList from "../component/user-list/UserList";

const App = () => {
  const [users, setUsers] = useState([
  { id: 1, nom: 'Alice', motDePasse: 'pass123', role: 'admin' },
  { id: 2, nom: 'Bob', motDePasse: 'azerty', role: 'user' },
  { id: 3, nom: 'Charlie', motDePasse: '123456', role: 'user' },
  { id: 4, nom: 'Diana', motDePasse: 'diana2024', role: 'admin' },
  { id: 5, nom: 'Eric', motDePasse: 'motdepasse', role: 'user' },
  { id: 6, nom: 'Fatima', motDePasse: 'fatipass', role: 'user' },
]);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleEditSelect = (user: any) => {
    setSelectedUser(user);
  };

  const handleDelete = (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const handleSave = (user: any) => {
    if (user.id) {
      // Modifier
      setUsers(prev => prev.map(u => u.id === user.id ? user : u));
    } else {
      // Ajouter
      const newUser = { ...user, id: Date.now() };
      setUsers(prev => [...prev, newUser]);
    }
    setSelectedUser(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Gestion des utilisateurs</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList data={users} itemsPerPage={5} onEditSelect={handleEditSelect} onDelete={handleDelete} />
    </div>
  );
};

export default App;
