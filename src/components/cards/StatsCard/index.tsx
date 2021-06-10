import React from 'react';
import * as S from './styles';

interface StatsCard {
  value: string
  title: string
}
const StatsCard: React.FC<StatsCard> = ({ value, title }) => {
  return (
    <S.Container>
      <S.Value>{value}</S.Value>
      <S.Spaced>{title}</S.Spaced>
    </S.Container>
  )
}

export default StatsCard;