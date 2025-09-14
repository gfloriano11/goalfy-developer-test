import { AtSign, List, Phone, TextCursor } from "lucide-react";
import styled from "styled-components";

const ClientsTable = styled.table`
    width: 80vw;
    font-family: "Red Hat Text";
    color: #666D73;
    font-size: 14px;
    /* border-collapse: collapse; */
    border: 1px solid #E8E8E8;
    
    & thead{
        width: 100%;
        border-bottom: 1px solid #E8E8E8;
    }

    & tr{
        display: flex;
        align-items: center;
        background-color: white;
    }
`

const Th = styled.th`
    min-width: 140px;
    position: relative;
    font-weight: 500;
    padding: 8px 80px 8px 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    color: #666D73;
    font-size: 14px;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 20%;
        bottom: 20%;
        right: 0;
        width: 1px;
        background-color: #e0e0e0;
    }
`;
function Table(){

    return(
        <ClientsTable>
            <thead>
                <tr>
                    <Th> <TextCursor size={"16px"} color="#949FA6"/> Nome do Cliente</Th>
                    <Th> <AtSign size={"16px"} color="#949FA6"/> Email</Th>
                    <Th> <Phone size={"16px"} color="#949FA6"/> Telefone</Th>
                    <Th> <List size={"16px"} color="#949FA6"/> CNPJ</Th>
                    <Th> <TextCursor size={"16px"} color="#949FA6"/> Endereço</Th>
                    <Th> <TextCursor size={"16px"} color="#949FA6"/> Cidade</Th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </ClientsTable>
    )
}

export default Table;