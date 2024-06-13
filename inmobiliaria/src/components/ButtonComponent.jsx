import '../assets/styles/Button.css';
import { useNavigate } from "react-router-dom";

function ButtonComponent({ type, path }){
    const navigate = useNavigate();
    const buttonText = {
        delete: "Eliminar",
        edit: "Editar",
        add: "Agregar"
    }

    function handleClick(){
        navigate(path);
    }

    return(
        <button className={'button-'+type} onClick={handleClick}>
            <p>{buttonText[type]}</p>
        </button>
    );
}

export default ButtonComponent;