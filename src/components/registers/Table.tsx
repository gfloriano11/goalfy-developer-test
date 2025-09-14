import { TextCursor } from "lucide-react";
import styled from "styled-components";

const ClientsTable = styled.table`
    font-family: "Red Hat Text";
    /* font-weight: 400; */
    color: #666D73;
    font-size: 14px;
    border-collapse: collapse;

    & tr{
        background-color: red;
    }

    & th{
        font-weight: 500;
    }
`

const Name = styled.th`
    display: flex;
    justify-content: left;
    padding-left: 20px;
    width: 200px;
`;
function Table(){

    return(
        <ClientsTable>
            <thead>
                <tr>
                    <Name> <TextCursor size={"16px"}/> Nome do Cliente</Name>
                    <th>E-mail</th>
                    <th>CNPJ</th>
                    <th>Endereço</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </ClientsTable>
    )
}

export default Table;