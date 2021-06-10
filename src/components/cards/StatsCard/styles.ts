import styled from 'styled-components';

export const Container = styled.div`

`;

export const Value = styled.p`
  font-size: 5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 2rem;
  text-align: center;
`

export const Spaced = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  max-width: 28rem;
`