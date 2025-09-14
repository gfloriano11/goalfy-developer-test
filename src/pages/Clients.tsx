import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";
import Table from "../components/registers/Table";

const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

function Clients(){
    return(
    <MainContainer>
        <Navbar/>
        <OptionsContainer/>
        <Table/>
    </MainContainer>
    )
}

export default Clients;