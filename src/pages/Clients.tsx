import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import OptionsContainer from "../components/optionsContainer/optionsContainer";
import Table from "../components/registers/Table";
import { useContext, useEffect, useState } from "react";
import AddClientForm from "../components/clientForm/ClientForm";
import { ClientsContext, type Client } from "../contexts/ClientsContext";

const MainContainer = styled.div<{$nointeraction: boolean}>`
    position: relative;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    filter: ${({ $nointeraction }) => ($nointeraction) ? "blur(1px)" : "none"};
    user-select: ${({ $nointeraction }) => ($nointeraction) ? "none" : "text;"};
    pointer-events: ${({ $nointeraction }) => ($nointeraction) ? "none" : "all"};
`

const TableContainer = styled.div`
    max-width: 100vw;
    min-width: 80vw;
    max-height: 70dvh;
    border-radius: 10px;
    overflow-x: auto;
    overflow-y: auto;
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
    const [search, setSearch] = useState('');
    const [editClient, setEditClient] = useState<Client | null>(null);
    const [addUserForm, setAddUserForm] = useState(false);
    const context = useContext(ClientsContext);
    const clients = context?.clients;
    const count = clients? clients.length : 0; 
    async function getClients(){

      const response = await fetch(`http://localhost:8000/clients`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
      })

      const data = await response.json();

      if(search === ''){
        context?.loadClients(data);
      } else {
        const lowerCaseSearch = search.toLowerCase();
        context?.loadClients(
            data?.filter((client: Client) =>
            client.fullname.toLowerCase().includes(lowerCaseSearch) ||
            client.email.toLowerCase().includes(lowerCaseSearch) ||
            client.phone.toLowerCase().includes(lowerCaseSearch) ||
            client.CNPJ.toLowerCase().includes(lowerCaseSearch) ||
            client.address.toLowerCase().includes(lowerCaseSearch) ||
            client.city.toLowerCase().includes(lowerCaseSearch)
          )
        )
      }
    }

    useEffect(() => {
      getClients();
    }, [search])
    
    return(
    <>
      <MainContainer $nointeraction={addUserForm}>
        <Navbar />
        <OptionsContainer onClick={() => setAddUserForm(true)} setSearch={setSearch} countRegisters={count}/>
        <TableContainer>
          <Table setEditClient={setEditClient} setAddUserForm={setAddUserForm}/>
        </TableContainer>
      </MainContainer>
      {addUserForm && (
        <FormContainer>
          <AddClientForm editClient={editClient} onClick={() => {setAddUserForm(false); setEditClient(null)}} />
        </FormContainer>
      )}
    </>
    )
}

export default Clients;