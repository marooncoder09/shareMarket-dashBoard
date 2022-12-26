import LogoutButton from "./buttons/LogoutButton.jsx";

import Logo from '../assets/images/logo2.png';
import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <div className="header">
            <div className="top-bar">
                <Link className="inline-flex jc-center ai-center text-on-primary" to="/">
                    <h1 className="title">EasyInvest</h1>
                </Link>
                <div className="flex">
                    <NavLink className="button has-icon nav-link" to="/wallet">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18 7h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h15v4zM4 9v10h16V9H4zm0-4v2h12V5H4zm11 8h3v2h-3v-2z"/></svg>
                        Wallet
                    </NavLink>
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}