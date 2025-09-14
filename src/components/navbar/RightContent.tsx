import { UserRoundIcon } from "lucide-react";
import styled from "styled-components";
import Separator from "./Separator";

function RightContent(){
    const RightContent = styled.div`
        display: flex;
        align-items: center;
        color: #949FA6;
        font-family: "Red Hat Text";
        gap: 20px;
    `

    const MembersContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 3px;
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

    return(
        <RightContent>
            <MembersContainer>
                <UserRoundIcon size={"20px"}/>
                <p>Membros (20)</p> 
            </MembersContainer>
            <Separator/>
            <UserImageContainer>
                <UserImage src="src/assets/foto.jpg"/>
            </UserImageContainer>
        </RightContent>
    )
}

export default RightContent;