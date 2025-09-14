import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";
import Table from "../components/registers/Table";
import { useState } from "react";
import AddClientForm from "../components/clientForm/AddClientForm";

const MainContainer = styled.div`
    position: relative;
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

const FormContainer = styled.div`
    background-color: #fcfcfc;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #f5f5f5;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Red Hat Text";
    font-weight: 600;
`
function Clients(){
    const [addUserForm, setAddUserForm] = useState(false);

    return(
    <MainContainer>
        <Navbar/>
        <OptionsContainer onClick={() => setAddUserForm(true)}/>
        <TableContainer>
            <Table/>
        </TableContainer>
        {addUserForm && (
        <FormContainer>
            <AddClientForm onClick={() => setAddUserForm(false)}/>
        </FormContainer>
        )}
    </MainContainer>
    )
}

export default Clients;