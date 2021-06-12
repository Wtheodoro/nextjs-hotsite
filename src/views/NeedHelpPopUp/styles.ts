import styled, { keyframes } from 'styled-components';

const opaticyAnimation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const cardAnimation = keyframes`
  0%{
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${opaticyAnimation} 0.5s ease;
  position: relative;
`

export const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #483D8B;
  opacity: 0.7;
`

export const Card = styled.div`
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 47rem;
  height: 40rem;
  padding: 5rem;
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  animation: ${cardAnimation} 0.6s ease;


  > p {
    font-size: 2.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    > a {
      margin-top: 2rem;
    }
  }

  @media(max-width: 425px) {
    padding: 2rem;
    width: 32rem;
  }
`
export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    font-size: 4rem;
    cursor: pointer;
  }
`
