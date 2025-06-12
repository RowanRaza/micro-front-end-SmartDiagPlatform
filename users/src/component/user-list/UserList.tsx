import { FaTrash } from "react-icons/fa";
import { RiEditCircleFill } from "react-icons/ri";
import { useState } from 'react';
import './UserList.css';

const UserList = ({
  data,
  itemsPerPage = 5,
  onEditSelect,
  onDelete
}: {
  data: any[],
  itemsPerPage: number,
  onEditSelect: (user: any) => void,
  onDelete: (id: number) => void
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="user-list-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.role}</td>
                <td className="actions">
                  <RiEditCircleFill className="icon edit-icon" size={25} onClick={() => onEditSelect(user)} />
                  <FaTrash className="icon delete-icon" size={22} onClick={() => onDelete(user.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="display-control">
        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>Précédent</button>
        <span>Page {currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Suivant</button>
      </div>
    </div>
  );
};

export default UserList;
