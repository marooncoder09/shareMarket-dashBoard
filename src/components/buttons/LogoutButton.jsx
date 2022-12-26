import useAuth from '../../hooks/use-auth.jsx';
import LogoutIcon from '../icons/LogoutIcon.jsx';

export default function LogoutButton() {
    const { logout } = useAuth();

    return (
        <button onClick={logout} className="button has-icon">
            <LogoutIcon />
        </button>
    )
}