import styled, { css } from 'styled-components';

interface ContainerProps {
  color?: string
  icon?: boolean
  iconColor?: string
}

const containerModifiers ={
  hasIcon: (iconColor: string | undefined) => css`
    svg {
      font-size: 2rem;
      color: ${iconColor ? iconColor : ''};
      margin-right: 0.5rem;
    }
  `,
  fontColor: (color: string) => css`
    color: ${color};
  `
}

export const Container = styled.a<ContainerProps>`
  font-size: 1.8rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  ${props => props.color && containerModifiers.fontColor(props.color)}
  ${props => props.icon && containerModifiers.hasIcon(props.iconColor)}
`;
