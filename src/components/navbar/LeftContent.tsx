import styled from "styled-components";
import Separator from "../navbar/Separator";
import { ExternalLinkIcon } from "lucide-react";

function LeftContent(){
    const LeftContent = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;
    `

    const LogoText = styled.span`
        font-size: larger;
        font-family: "Red Hat Text";
    `

    const PageName = styled.p`
        font-size: larger;
        font-weight: 500;
        font-family: "Red Hat Text";
    `

    return(
        <LeftContent>
            <LogoText>Goalfy</LogoText>
            <Separator/>
            <span><ExternalLinkIcon color="#5D29A1" size={"26px"}/></span>
            <PageName>Registro de Clientes</PageName>
        </LeftContent>
    )
}

export default LeftContent;