import styled from "styled-components";

const Card = ({ image, name, price }) => {
    return (
        <Container>
            <Name>{name}</Name>
            <Image src={image}/>
            <Price>${price}</Price>

        </Container>
    );
}

export default Card;

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 25%;
`
const Image = styled.img `
    width: 75%;
`
const Name = styled.h2 `
    font-size: 150%;
`
const Price = styled.p `
    
`