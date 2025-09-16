import { AtSign, ExternalLinkIcon, List, Phone, TextCursor } from "lucide-react";
import styled from "styled-components";
import PurpleButton from "../PurpleButton";
import type { Client } from "../../contexts/ClientsContext";
import { useEffect } from "react";

type props = {
    editClient: Client | null;
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
        fullnameError: string;
        emailError: string;
        phoneError: string;
        CNPJError: string;
        CEPError: string;
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
    justify-content: center;
    /* gap: 5px; */
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

const ErrorMessage = styled.p`
    margin: 0;
    color: #c01212;
`

function FormInfo({editClient, setters, values}: props){

    useEffect(() => {
        if(editClient){
            setters.setClientName(editClient.fullname);
            setters.setEmail(editClient.email);
            setters.setPhone(editClient.phone);
            setters.setCNPJ(editClient.CNPJ);
            setters.setCEP(editClient.CEP);
        } else {
            // se não tiver editando, limpa os campos
            setters.setClientName('');
            setters.setEmail('');
            setters.setPhone('');
            setters.setCNPJ('');
            setters.setCEP('');
        }
    }, [editClient])
    
    return(
        <FormInfoContainer>
            <FormTitle><ExternalLinkIcon color="#5D29A1"/>{editClient ? "Editar Cliente" : "Novo Cliente"}</FormTitle>
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
                {values.fullnameError !== '' && <ErrorMessage>{values.fullnameError}</ErrorMessage>}
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
                {values.emailError !== '' && <ErrorMessage>{values.emailError}</ErrorMessage>}
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
                {values.phoneError !== '' && <ErrorMessage>{values.phoneError}</ErrorMessage>}
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
                {values.CNPJError !== '' && <ErrorMessage>{values.CNPJError}</ErrorMessage>}                
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
                {values.CEPError !== '' && <ErrorMessage>{values.CEPError}</ErrorMessage>}                
            </LabelContainer>
            <PurpleButton text="Novo Registro"/>
        </FormInfoContainer>
    )
}

export default FormInfo;