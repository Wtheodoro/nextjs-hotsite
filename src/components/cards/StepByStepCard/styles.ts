import styled from 'styled-components';

export const Container = styled.div`
  width: min(90%, 60rem);
  background: ${props => props.theme.colors.white};
  padding: 4rem 5rem;
  position: relative;
  text-align: start;
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.26);

  > h3 {
    margin-bottom: 2rem;
  }

  > p {
    margin-bottom: 3rem;
    color: ${props => props.theme.colors.semiBlack};
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.6em;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: -5rem;
  left: -7.5rem;
`
export const LinkWrapper = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 2rem;
  }
`
