import React from 'react';
import Link from '../Link';
import Logo from '../Logo';
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import * as S from './styles';
import Button from '../Button';

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Content>

        <Logo />

        <S.LinksWrapper>
          <Link 
            link="https://api.whatsapp.com/send?phone=5519974229726"
            icon={<FaWhatsapp />}
            color="#FFF"
            iconColor='green'
          >
            (19) 97422-9726
          </Link>
          <Link 
            link="tel:5519974229726"
            icon={<FaPhone />}
            color="#FFF"
            iconColor='green'
          >
            (19) 97422-9726
          </Link>
        </S.LinksWrapper>

        <Button 
          icon={<FaWhatsapp />}  
          type="transparent" 
          as="a" 
          href="https://www.youtube.com/"
        >
          Especialista Online
        </Button>
      </S.Content>
    </S.Container>
  )
}

export default MainHeader;