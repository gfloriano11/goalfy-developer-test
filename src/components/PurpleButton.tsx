import styled from "styled-components";

type props = {
    text: string
    icon?: React.ElementType
}

const Button = styled.button`
    display: flex;
    height: 100%;
    font-family: "Red Hat Text";
    font-weight: 600;
    justify-content: center;
    align-items: center;
    background: #5D29A1;
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    gap: 6px;
`;

function PurpleButton({text, icon: Icon}: props){

    return(
        <Button>{Icon && <Icon/>}{text}</Button>
    );
}

export default PurpleButton;