import { ExternalLinkIcon, PlusCircle, UserIcon, UserRoundIcon } from "lucide-react";
import PurpleButton from "../components/PurpleButton";
import styled from "styled-components";

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98vw;
    padding-left: 1vw;
    padding-right: 1vw;
`

const LeftContent = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const RightContent = styled.div`
    display: flex;
    align-items: center;
    color: #949FA6;
    font-family: "Red Hat Text";
    gap: 20px;
`

const UserImageContainer = styled.div`
    width: 36px;
    max-height: 36px;
    height: 36px;
    border-radius: 50%;
    /* object-fit: cover; */
    /* object-position: center;    */
    overflow: hidden;
`
const UserImage = styled.img`
    width: 100%;
`

const MembersContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
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

const Separator = styled.span`
    font-size: 1.5rem;
    color: #E6E6E6;
`

function Clients(){
    return(
    <>
        <Navbar>
            <LeftContent>
                <LogoText>Goalfy</LogoText>
                <Separator>|</Separator>
                <span><ExternalLinkIcon color="#5D29A1" size={"26px"}/></span>
                <PageName>Registro de Clientes</PageName>
            </LeftContent>
            <RightContent>
                <MembersContainer>
                    <UserRoundIcon size={"20px"}/>
                    <p>Membros (20)</p> 
                </MembersContainer>
                <Separator>|</Separator>
                <UserImageContainer>
                    <UserImage src="src/assets/foto.jpg"></UserImage>

                </UserImageContainer>
            </RightContent>
        </Navbar>
        <div>
            <PurpleButton icon={PlusCircle} text="Novo Registro"/>
        </div>
        <div></div>
    </>
    )
}

export default Clients;