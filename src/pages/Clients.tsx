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

const TableContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #E8E8E8;
`;
function Clients(){
    return(
    <MainContainer>
        <Navbar/>
        <OptionsContainer/>
        <TableContainer>
            <Table/>
        </TableContainer>
    </MainContainer>
    )
}

export default Clients;