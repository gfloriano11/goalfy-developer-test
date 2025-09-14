import styled from "styled-components";

type props = {
    text: string
    icon?: React.ElementType
    setAddUserForm: Function
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

function PurpleButton({text, icon: Icon, setAddUserForm}: props){

    return(
        <Button onClick={() => setAddUserForm(true)}>{Icon && <Icon/>}{text}</Button>
    );
}

export default PurpleButton;