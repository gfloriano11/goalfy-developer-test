import styled from "styled-components";

type props = {
    text: string
    icon?: React.ElementType
}

const Button = styled.button`
display: flex;
justify-content: center;
background: #5D29A1;
color: white;
padding: 8px 16px;
border-radius: 12px;
cursor: pointer;
border: none;
gap: 6px;
`;

function PurpleButton({text, icon: Icon}: props){

    return(
        <Button >{Icon && <Icon/>}{text}</Button>
    );
}

export default PurpleButton;