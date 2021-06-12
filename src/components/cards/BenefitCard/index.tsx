import React from 'react';
import { MdNavigateNext } from 'react-icons/md'
import { useHelpPopUp } from '../../../hook/HelpPopUpContext';
import * as S from './styles';

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  children: string
  popup?: string
}

const BenefitCard: React.FC<BenefitCardProps> = ({ 
  icon,
  title,
  children,
  popup
}) => {
  
  const { openPopUp } = useHelpPopUp()

  return (
    <S.Container>
      <div className="popup">
        <p>{popup}</p>
      </div>

      <S.IconWrapper>
        {icon}
      </S.IconWrapper>

      <h3>{title}</h3>
      <p>{children}</p>

      <S.LinkWrapper>
        <span onClick={openPopUp}>SAIBA MAIS <MdNavigateNext/></span>
      </S.LinkWrapper>
    </S.Container>
  )
}

export default BenefitCard;