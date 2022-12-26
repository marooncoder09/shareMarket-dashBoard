import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../icons/ArrowLeftIcon.jsx";

export default function BackButton() {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="button icon-button">
            <ArrowLeftIcon />
        </button>
    )
}