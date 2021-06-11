import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > h2 {
    margin-bottom: 2rem;
  }

  > h3 {
    margin-bottom: 5rem;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    margin: 4rem 0;
  }
`
