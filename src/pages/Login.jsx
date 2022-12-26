import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import BackButton from "../components/buttons/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";
import useAuth from "../hooks/use-auth.jsx";
import { signIn } from "../services/auth.js";
import { AUTH_USER } from "../store/actions.js";
import { StoreContext } from "../store/store-context.js";

export default function Login() {
    const { currentUser } = useAuth();

    const [_, dispatch] = useContext(StoreContext);

    const [loggingIn, setLoggingIn] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    if(currentUser) {
        return <Navigate to="/dashboard" replace />
    } 

    const handleSubmit = async e => {
        e.preventDefault();
        
        try {
            setLoggingIn(true);
            setError('');

            const trimmedEmail = email.trim();
            const trimmedPassword = password.trim();

            const { data, token } = await signIn(trimmedEmail, trimmedPassword);

            console.log(data)

            dispatch({
                type: AUTH_USER,
                payload: {
                    data,
                    token
                }
            });
        } catch(e) {
            console.error(e);
            setError(e.message);
        } finally {
            setLoggingIn(false);
        }
    };

    return (
        <div className="flex h-100vh">
            <div className="flex flex-1 dir-column">
                <div className="flex-1 flex jc-center ai-center">
                    <form className="form login-form" onSubmit={handleSubmit}>
                        <h5 className="w-100pc">Login</h5>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="input" 
                                type="email" 
                                name="email" 
                                id="email" 
                                autoComplete="username" 
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="input" 
                                type="password" 
                                name="password" 
                                id="password" 
                                autoComplete="current-password" 
                            />
                        </div>
                        {
                            error
                                ? (
                                    <div className="error-message">
                                        {error}
                                    </div>
                                )
                                : null
                        }
                        <button disabled={loggingIn} className="button action-button is-large">
                            <span className="action-button-content">
                                {
                                    !loggingIn
                                        ? 'Sign In'
                                        : <Spinner />
                                }
                            </span>
                        </button>
                        <div className="flex dir-column g-1rem">
                            <Link to="/forgot-password">Forgot Password</Link>
                            <div className="flex dir-column g-0_5rem">
                                <span className="text-large">Don't have an account?</span>
                                <Link className="text-bold" to="/sign-up">Sign up</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}