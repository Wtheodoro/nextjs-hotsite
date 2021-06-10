import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 10rem 0;

  > p {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  > h2 {
    margin-bottom: 2rem;
  } 

  .logo, h3 {
    margin-bottom: 3rem;
  }
`;

export const CardsWrapper = styled.div`
  width: 100rem;
  margin-top: 3rem;
  display: flex;
  justify-content: space-around;
`
