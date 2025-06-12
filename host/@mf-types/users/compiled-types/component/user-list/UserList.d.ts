import './UserList.css';
declare const UserList: ({ data, itemsPerPage, onEditSelect, onDelete }: {
    data: any[];
    itemsPerPage: number;
    onEditSelect: (user: any) => void;
    onDelete: (id: number) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default UserList;
