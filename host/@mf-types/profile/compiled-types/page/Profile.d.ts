import './Profile.css';
declare const Profile: ({ user }: {
    user?: {
        nom: string;
        role: string;
    } | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default Profile;
