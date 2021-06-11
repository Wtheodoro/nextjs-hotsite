import React from 'react';
import * as S from './styles';

interface LinkProps {
  children: React.ReactNode
  color?: string
  icon?: React.ReactNode
  iconColor?: string
  link: string
}

const Link: React.FC<LinkProps> = ({ children, color, icon, iconColor, link}) => {
  return (
    <S.Container 
      color={color}
      icon={!!icon}
      iconColor={iconColor}
      href={link}
    >
      {icon} {children}
    </S.Container>
  )
}

export default Link;