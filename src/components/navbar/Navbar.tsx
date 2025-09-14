import styled from "styled-components"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98vw;
    padding-left: 1vw;
    padding-right: 1vw;
    border-bottom: 1px solid #F2F2F2;
`

function Navbar(){

    return(
        <Nav>
            <LeftContent/>
            <RightContent/>
        </Nav>
    )
}

export default Navbar