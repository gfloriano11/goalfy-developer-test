import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";


function Clients(){
    const MainContainer = styled.div`
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    `
    return(
    <MainContainer>
        <Navbar/>
        <OptionsContainer/>
    </MainContainer>
    )
}

export default Clients;