import styled from "styled-components"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

function Navbar(){
    const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border-bottom: 1px solid #F2F2F2;
`

    return(
        <Navbar>
            <LeftContent/>
            <RightContent/>
        </Navbar>
    )
}

export default Navbar