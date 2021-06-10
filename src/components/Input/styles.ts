import styled from 'styled-components';

export const Input = styled.input`
  color: ${props => props.theme.colors.black};
  border: 1px solid ${props => props.theme.colors.background};
  border-radius: 5px;
  padding: 0.7rem;
`;