import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = {
  hasIcon: boolean
} & Pick<ButtonProps , 'type' | 'fullWidth'>

const containerModifiers ={
  standard: () => css`
    background: green;
  `,
  transparent: () => css`
    border: 1px solid ${props => props.theme.colors.white};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: 1rem;
      }
    }
  `
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem 2rem;
  color: ${props => props.theme.colors.text};
  border-radius: 5px;
  text-decoration: none;

  ${props => !!props.type && containerModifiers[props.type]}
  ${props =>!!props.fullWidth && containerModifiers.fullWidth()}
  ${props => !!props.hasIcon && containerModifiers.withIcon()}
`;
