import { PlusCircle } from "lucide-react";
import PurpleButton from "../components/PurpleButton";

function Clients(){
    return(
    <>
        <nav>
            <span>Goalfy</span>
            <div>
                <p>seta</p>
                <p>Registro de Clientes</p>
            </div>
        </nav>
        <div>
            <PurpleButton icon={PlusCircle} text="Novo Registro"/>
        </div>
        <div></div>
    </>
    )
}

export default Clients;