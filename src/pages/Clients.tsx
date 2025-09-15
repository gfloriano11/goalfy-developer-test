import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";
import Table from "../components/registers/Table";
import { useContext, useEffect, useState } from "react";
import AddClientForm from "../components/clientForm/AddClientForm";
import { ClientsContext } from "../contexts/ClientsContext";

const MainContainer = styled.div<{noInteraction: boolean}>`
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    /* filter: blur(1px); */
    filter: ${({ noInteraction }) => (noInteraction) ? "blur(1px)" : "none"};
    user-select: ${({ noInteraction }) => (noInteraction) ? "none" : "text;"};
    pointer-events: ${({ noInteraction }) => (noInteraction) ? "none" : "all"};
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
    const context = useContext(ClientsContext);

    async function getClients(){

      const response = await fetch(`http://localhost:8000/clients`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
      })

      const data = await response.json();
      console.log(data);
      context?.loadClients(data);

    }

    useEffect(() => {
      getClients();
    }, [])
    
    return(
    <>
      <MainContainer noInteraction={addUserForm}>
        <Navbar />
        <OptionsContainer onClick={() => setAddUserForm(true)} />
        <TableContainer>
          <Table />
        </TableContainer>
      </MainContainer>
      {addUserForm && (
        <FormContainer>
          <AddClientForm onClick={() => setAddUserForm(false)} />
        </FormContainer>
      )}
    </>
    )
}

export default Clients;