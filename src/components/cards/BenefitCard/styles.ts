import styled, { keyframes } from 'styled-components';

const popAnimation = keyframes`
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 30rem;
  height: 33.5rem;
  border: 1px solid #E5E5E5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 4rem 1.2rem;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  position: relative;

  > h3 {
    font-size: 2.2rem;
    color: ${props => props.theme.colors.primary};
  }

  .popup {
    position: absolute;
    top: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
    display: none;
    animation: ${popAnimation} 0.5s ease;
  }

  &:hover{
    border-color: ${props => props.theme.colors.secondary};
    
    .popup {
      display: block;
    }
  }
`;

export const IconWrapper = styled.div`
  > svg {
    font-size: 4rem;
  }
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