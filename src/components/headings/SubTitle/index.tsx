import React from 'react';
import * as S from './styles';

export interface TitleProps {
  children: string
}

const SubTitle: React.FC<TitleProps> = ({ children }) => {
  return (
    <S.Title>{children}</S.Title>
  )
}

export default SubTitle;