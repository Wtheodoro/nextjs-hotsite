import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  type?: 'standard' | 'transparent'
  color?: string
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'standard',
  color,
  icon,
  ...props
}) => {
  return (
    <S.Container type={type} hasIcon={!!icon} color={color} {...props} target="blank">
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </S.Container>
  )
}

export default Button;