import styled from "styled-components";
import PurpleButton from "../PurpleButton";
import { PlusCircle, SearchIcon } from "lucide-react";

type props = {
    setAddUserForm: Function
}
const Options = styled.div`
    display: flex;
    align-items: center;
    width: 80vw;
    height: 32px;
    gap: 20px;
`

const SearchContainer = styled.div`
    height: 100%;
    max-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
`

const Search = styled.input`
    height: 100%;
    padding: 0;
    border-radius: 0 8px 8px 0;
    background-color: #F2F2F2;
    border: none;
    color: #949FA6;
    font-family: "Red Hat Text";
    outline: none;
`

const StyledSearch = styled(SearchIcon)`
    color: #949fa6;
    padding-left: 4px;
    padding-right: 4px;
`;

const RegistersInfo = styled.p`
    font-family: "Red Hat Text";
    color: #949FA6;
    font-size: 16px;
    font-weight: 500;
`;

function OptionsContainer({setAddUserForm}: props){
    
    return(
        <Options>
            <PurpleButton setAddUserForm={setAddUserForm} icon={PlusCircle} text="Novo Registro"/>
            <SearchContainer>
                <StyledSearch size="22px"/>
                <Search placeholder="Pesquisar..."/>
            </SearchContainer>
            <RegistersInfo>86 registros</RegistersInfo>
        </Options>
    )
}

export default OptionsContainer;