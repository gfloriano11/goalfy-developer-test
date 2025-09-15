import { AtSign, ExternalLinkIcon, List, Phone, TextCursor } from "lucide-react";
import styled from "styled-components";
import PurpleButton from "../PurpleButton";

type props = {
    setters: {
        setClientName: React.Dispatch<React.SetStateAction<string>>;
        setEmail: React.Dispatch<React.SetStateAction<string>>;
        setPhone: React.Dispatch<React.SetStateAction<string>>;
        setCNPJ: React.Dispatch<React.SetStateAction<string>>;
        setCEP: React.Dispatch<React.SetStateAction<string>>;
    };
    values: {
        clientName: string;
        email: string;
        phone: string;
        CNPJ: string;
        CEP: string;
    };
}

const FormInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px;
    padding-left: 20px;
    padding-right: 20px;
`

const FormTitle = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
`;

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
`;

const InputContainer = styled.div`
    height: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 5px;
    background-color: #F2F2F2;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    padding-left: 5px;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: #F2F2F2;
    border: none;
    color: #949FA6;
    font-family: "Red Hat Text";
    outline: none;
`;

function FormInfo({setters, values}: props){
    
    return(
        <FormInfoContainer>
            <FormTitle><ExternalLinkIcon color="#5D29A1"/>Novo Cliente</FormTitle>
            <LabelContainer>
                <label htmlFor="name">Nome do Cliente</label>
                <InputContainer>
                    <TextCursor size={"16px"} color="#949FA6"/>
                    <Input
                        type="text"
                        placeholder="Digite aqui..."
                        name="name" 
                        value={values.clientName}
                        onChange={(event) => setters.setClientName(event.target.value)}></Input>
                </InputContainer>
            </LabelContainer>
            <LabelContainer>
                <label htmlFor="email">Email</label>
                <InputContainer>
                    <AtSign size={"16px"} color="#949FA6"/>
                    <Input
                        type="text"
                        placeholder="Digite aqui..." 
                        name="email"
                        value={values.email}
                        onChange={(event) => setters.setEmail(event.target.value)}></Input>
                </InputContainer>
            </LabelContainer>
            <LabelContainer>
                <label htmlFor="phone">Telefone</label>
                <InputContainer>
                    <Phone size={"16px"} color="#949FA6"/>
                    <Input
                        type="text"
                        placeholder="Digite aqui..."
                        name="phone"
                        value={values.phone}
                        onChange={(event) => setters.setPhone(event.target.value)}></Input>
                </InputContainer>
            </LabelContainer>
            <LabelContainer>
                <label htmlFor="CNPJ">CNPJ</label>
                <InputContainer>
                    <List size={"16px"} color="#949FA6"/>
                    <Input 
                        type="text" 
                        placeholder="Digite aqui..." 
                        name="CNPJ" 
                        value={values.CNPJ}
                        onChange={(event) => setters.setCNPJ(event.target.value)}>
                    </Input>
                </InputContainer>
            </LabelContainer>
            <LabelContainer>
                <label htmlFor="CEP">CEP</label>
                <InputContainer>
                    <TextCursor size={"16px"} color="#949FA6"/>
                    <Input
                        type="text" 
                        placeholder="Digite aqui..." 
                        name="CEP" 
                        value={values.CEP}
                        onChange={(event) => setters.setCEP(event.target.value)}>
                    </Input>
                </InputContainer>
            </LabelContainer>
            <PurpleButton text="Novo Registro"/>
        </FormInfoContainer>
    )
}

export default FormInfo;