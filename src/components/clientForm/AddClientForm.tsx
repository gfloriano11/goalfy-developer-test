import { X } from "lucide-react";
import styled from "styled-components";
import FormInfo from "./FormInfo";

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
    return(
        <Form>
            <TopForm>
                <CloseForm onClick={onClick}/>
            </TopForm>
            <FormInfo/>
        </Form>
    )
}

export default AddClientForm;