import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

type props = {
    text: string
    icon?: React.ElementType
}

const StyledLink = styled(Link)`
    display: flex;
    height: 100%;
    font-family: "Red Hat Text";
    font-weight: 600;
    justify-content: center;
    align-items: center;
    background: #5D29A1;
    color: white;
    padding: 0 12px 0 12px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    gap: 6px;
    text-decoration: none;
`;

function PurpleButton({text, icon: Icon}: props){

    // const navigate = useNavigate();

    return(
        <StyledLink to={'add'}>{Icon && <Icon size={"20px"}/>}{text}</StyledLink>
    );
}

export default PurpleButton;