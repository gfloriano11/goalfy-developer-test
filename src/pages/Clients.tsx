import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";
import Table from "../components/registers/Table";
import { useState } from "react";
import AddClientForm from "../components/clientForm/AddClientForm";

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

const FormContainer = styled.div`
    font-family: "Red Hat Text";
    font-weight: 600;
`
function Clients(){
    const [addUserForm, setAddUserForm] = useState(false);

    return(
    <MainContainer>
        <Navbar/>
        <OptionsContainer setAddUserForm={setAddUserForm}/>
        <TableContainer>
            <Table/>
        </TableContainer>
        {addUserForm && (
        <FormContainer>
            <AddClientForm setAddUserForm={setAddUserForm}/>
        </FormContainer>
        )}
    </MainContainer>
    )
}

export default Clients;