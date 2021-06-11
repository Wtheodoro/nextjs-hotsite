import styled from 'styled-components';

export const Container = styled.div`
  background-image: url("/images/key-background.jpg");
  background-size: cover;
  padding: 10rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 425px) {
    padding: 4rem 2rem;
  }
`;

export const Content = styled.div`
  width: 45rem;

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
