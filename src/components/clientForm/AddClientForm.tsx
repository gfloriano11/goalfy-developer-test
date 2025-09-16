import { X } from "lucide-react";
import styled from "styled-components";
import FormInfo from "./FormInfo";
import { useState } from "react";

type props = {
    onClick?: () => void;
}

const Form = styled.form`
    width: 20vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    border: 1px solid #E8E8E8;
    border-radius: 8px;
    overflow: hidden;
`;

const TopForm = styled.div`
    display: flex;
    justify-content: right;
    padding-right: 5px;
    background-color: #F9F9F9;
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid #E4E5E7;   
`;

const CloseForm = styled(X)`
    color: #949FA6;
    cursor: pointer;
`;

function AddClientForm({onClick}: props){
    const [clientName, setClientName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [CEP, setCEP] = useState('');

    const [fullnameError, setFullnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [CNPJError, setCNPJError] = useState('');
    const [CEPError, setCEPError] = useState('');

    const setters = {
        setClientName,
        setEmail,
        setPhone,
        setCNPJ,
        setCEP
    };

    const values = {
        clientName,
        email,
        phone,
        CNPJ,
        CEP,
        fullnameError,
        emailError,
        phoneError,
        CNPJError,
        CEPError
    }

    function validateForm(){
        const errors = {
            fullnameError: '',
            emailError: '',
            phoneError: '',
            CNPJError: '',
            CEPError: ''
        }

        if (!clientName.trim()) errors.fullnameError = "Campo obrigatório";
        if (!email.trim()) errors.emailError = "Campo obrigatório";
        if (!email.includes('@') && email.trim()) errors.emailError = "Email incorreto";
        if (!phone.trim()) errors.phoneError = "Campo obrigatório";
        if (phone.length !== 11 && phone.trim()) errors.phoneError = "Telefone Incorreto";
        if (!CNPJ.trim()) errors.CNPJError = "Campo obrigatório";
        if (CNPJ.length !== 14 && CNPJ.trim()) errors.CNPJError = "CNPJ incorreto";
        if (!CEP.trim()) errors.CEPError = "Campo obrigatório";
        if (CEP.length !== 8 && CEP.trim()) errors.CEPError = "CEP incorreto";

        setFullnameError(errors.fullnameError);
        setEmailError(errors.emailError);
        setPhoneError(errors.phoneError);
        setCNPJError(errors.CNPJError);
        setCEPError(errors.CEPError);

        return Object.values(errors).every(error => error === '');
    }

    async function submitForm(submit: React.FormEvent<HTMLFormElement>){

        submit.preventDefault();

        if(!validateForm()) return;

        const response = await fetch(`http://localhost:8000/clients`, {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json'
            }, 
            body: JSON.stringify({
                fullname: clientName,
                email: email,
                phone: phone,
                CNPJ: CNPJ,
                CEP: CEP
            })
        })

        if(!response.ok){
            throw new Error('Error to add new client');
        }

        window.location.reload();
    }

    return(
        <Form onSubmit={submitForm}>
            <TopForm>
                <CloseForm onClick={onClick}/>
            </TopForm>
            <FormInfo setters={setters} values={values}/>
        </Form>
    )
}

export default AddClientForm;