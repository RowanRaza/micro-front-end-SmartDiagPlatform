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
    <div className="user-list">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nom}</td>
                <td>{user.role}</td>
                <td className="actions">
                  <button className="icon-btn edit" onClick={() => onEditSelect(user)}>
                    <RiEditCircleFill size={20} />
                  </button>
                  <button className="icon-btn delete" onClick={() => onDelete(user.id)}>
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
          ⬅ Précédent
        </button>
        <span>Page {currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
          Suivant ➡
        </button>
      </div>
    </div>
  );
};

export default UserList;
