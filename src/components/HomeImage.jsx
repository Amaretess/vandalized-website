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
    width: 95vw;
    height: 75vh;
    margin-left: 1rem;
    border: 1px solid black;
    max-width: 95vw;
    display: flex;
    flex: 1 0;
`

const Image = styled.img `
    width: 100%;
    height: 100%;
`