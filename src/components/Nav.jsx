import styled from "styled-components";


const Nav = () => {
    return (
        <>
        <NavBar>
            <LogoDiv>
                <Link href="#">
                    <Logo>Logo Here</Logo>
                </Link>
            </LogoDiv>
            <Container> 
                <ListItem>
                    <Link href="#">Home</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Men</Link>
                </ListItem>
                <ListItem>
                    <Link href="#">Women</Link>
                </ListItem> 
            </Container>
        </NavBar>
        </>
    );
}

export default Nav;

const NavBar = styled.ul `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    background: white;
    border: 2px solid grey;
`

const Container = styled.div`
    display: flex;
`

const ListItem = styled.li `
    list-style: none;
    margin: 1rem;
`

const Logo = styled.div `

`
const LogoDiv = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
`


const Link = styled.a `
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
`