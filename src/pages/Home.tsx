import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    height: 100dvh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-weight: 500;
    font-family: "Red Hat Text";
`;

const Button = styled(Link)`
    display: flex;
    /* height: 100%; */
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
    text-decoration: none;
`;
function Home(){
    return(
        <MainContainer>
            <Title>Goalfy</Title>
            <Button to={"/clients"}>Acessar Clientes</Button>
        </MainContainer>
    )
}

export default Home;