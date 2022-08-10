import styled from "styled-components";

export const Announcement = () => {
  return (
    <Container>
        Супер скидки тільки сьогодні, успій закупитись!
    </Container>
  )
}


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`;