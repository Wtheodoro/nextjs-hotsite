import React from 'react';
import SubTitle from '../../headings/SubTitle';
import Image from 'next/image'
import * as S from './styles';
import MediaMatch from '../../MediaMatch';
import { MdNavigateNext } from 'react-icons/md';

interface StepCardProps {
  title: string
  children: React.ReactNode
  imgLink: string
  imgAlt: string
}

const StepByStepCard: React.FC<StepCardProps> = ({
  title, children, imgLink, imgAlt
}) => {
  return (
    <S.Container>
      <MediaMatch hideOnMobileLessIpad>
        <S.ImageWrapper>
          <Image
            priority
            src={imgLink}
            height={120}
            width={120}
            alt={imgAlt}
          />
        </S.ImageWrapper>
      </MediaMatch>
      
      <SubTitle>{title}</SubTitle>

      <p>{children}</p>

      <S.LinkWrapper>
        <span onClick={()=>alert("clickou")}>SAIBA MAIS <MdNavigateNext/></span>
      </S.LinkWrapper>
    </S.Container>
  )
}

export default StepByStepCard;