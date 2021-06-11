import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  background-image: url("/images/key-background.jpg");
  background-size: cover;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 425px) {
    height: auto;
    padding: 4rem 2rem;
  }
`;

export const Content = styled.div`
  width: 45rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h3 {
    margin-bottom: 2rem;
  }

  > p {
    margin-bottom: 4rem;
  }

  @media(max-width: 425px) {
    text-align: center;
  }
`;

export const SimulatorWrapper = styled.div`
  width: 40rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-bottom: 3rem;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`
