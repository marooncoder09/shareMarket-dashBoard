import LogoutButton from "./buttons/LogoutButton.jsx";

import Logo from '../assets/images/logo2.png';
import { Link } from "react-router-dom";

export default function AppHeader() {
    return (
        <div className="header">
            <div className="top-bar">
                <Link className="inline-flex jc-center ai-center" to="/">
                    <img src={Logo} height={48} alt="ITaxEasy.com" />
                </Link>
                <LogoutButton />
            </div>
        </div>
    )
}