import React from 'react';
import * as S from './styles';

export interface TitleProps {
  children: string
  bigSize?: boolean
}

const Title: React.FC<TitleProps> = ({ children, bigSize }) => {
  return (
    <S.Title bigSize={bigSize}>{children}</S.Title>
  )
}

export default Title;