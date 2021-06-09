import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-image: url("/images/initial-background.jpg");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Left side on desktop
export const AddressPhoneInfo = styled.div`
  text-align: center;

  h1, p, a, svg {
    color: ${props => props.theme.colors.primary};
  }

  > p {
    margin: 2rem 0;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Right Side on desktop
export const SimulatorWrapper = styled.div`
  width: min(40%, 80rem);
  color: ${props => props.theme.colors.text};
  text-align: center;

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
`