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
        vertical-align: middle;
        background-color: white;
    }

    & td{
        padding-left: 20px;
    }
`

const Th = styled.th`
    vertical-align: middle;
    text-align: left;
    min-width: 140px;
    position: relative;
    font-weight: 500;
    padding: 8px 20px 8px 16px;
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

const Span = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
`
function Table(){

    return(
        <ClientsTable>
            <thead>
                <tr>
                    <Th><Span><TextCursor size={"16px"} color="#949FA6"/>Nome do Cliente</Span></Th>
                    <Th> <Span><AtSign size={"16px"} color="#949FA6"/> Email</Span></Th>
                    <Th> <Span><Phone size={"16px"} color="#949FA6"/> Telefone</Span></Th>
                    <Th> <Span><List size={"16px"} color="#949FA6"/> CNPJ</Span></Th>
                    <Th><Span><TextCursor size={"16px"} color="#949FA6"/> Endereço</Span></Th>
                    <Th><Span><TextCursor size={"16px"} color="#949FA6"/> Cidade</Span></Th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Gustavo Floriano</td>
                    <td>gfloriano777@gmail.com</td>
                    <td>47992606543</td>
                    <td>13759215920</td>
                    <td>R. Conrado Kuehne</td>
                    <td>Joinville</td>
                </tr>
            </tbody>
        </ClientsTable>

    )
}

export default Table;