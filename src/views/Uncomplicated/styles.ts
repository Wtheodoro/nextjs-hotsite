import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 0 10rem 0;

  > p {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  } 

  .logo, h3 {
    margin-bottom: 3rem;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  > div {
    margin: 2rem 0;
  }
`
