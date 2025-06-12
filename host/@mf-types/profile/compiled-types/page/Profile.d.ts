import './Profile.css';
declare const Profile: ({ user, onLogout }: {
    user?: {
        nom: string;
        role: string;
    } | undefined;
    onLogout?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default Profile;
