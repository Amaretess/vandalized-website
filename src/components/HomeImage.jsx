import styled from "styled-components";

const HomeImage = () => {
    return (
        <Container>
            <Image src="https://i.ytimg.com/vi/gbLmku5QACM/maxresdefault.jpg"/>
        </Container>
    );
}

export default HomeImage;

const Container = styled.div `
    width: 100vw;
    height: 80vh;
    margin: 1rem;
    justify-content: center;
    border: 1px solid black;
    display: flex;
    flex: 1 0;
`

const Image = styled.img `
    width: 90%;
    height: 100%;
`
