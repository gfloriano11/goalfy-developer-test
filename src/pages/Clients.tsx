import { PlusCircle } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import PurpleButton from "../components/PurpleButton";


function Clients(){
    return(
    <>
        <Navbar/>
        <div>
            <PurpleButton icon={PlusCircle} text="Novo Registro"/>
        </div>
        <div></div>
    </>
    )
}

export default Clients;