import React from 'react';
import * as S from './styles';

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  children: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, children }) => {
  return (
    <S.Container>
      <S.IconWrapper>
        {icon}
      </S.IconWrapper>

      <h3>{title}</h3>
      <p>{children}</p>

      <S.LinkWrapper>
        <span onClick={()=>alert("clickou")}>SAIBA MAIS</span>
      </S.LinkWrapper>
    </S.Container>
  )
}

export default BenefitCard;