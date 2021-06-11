import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/initial-background.jpg");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    height: 100%;
    padding: 4rem 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

// Left side on desktop
export const AddressPhoneInfo = styled.div`
  width: 50rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1, p, a, svg {
    color: ${props => props.theme.colors.primary};
  }

  > p {
    margin: 2rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 24px;
  }

  @media(max-width: 768px) {
    /* margin-top: 3rem; */
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const LinksWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    a + a {
      margin-top: 1rem;
    }
  }
`;

// Right Side on desktop
export const SimulatorWrapper = styled.div`
  width: 50rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 4.2rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 1.5em;
    margin-bottom: 2rem;
  }

  form {
    margin-bottom: 3rem;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`