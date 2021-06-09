import React from 'react';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import { FaWhatsapp, FaPhone } from 'react-icons/fa'
import * as S from './styles';
import Button from '../../components/Button';

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Content>

        <Logo />

        <S.LinksWrapper>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaWhatsapp />}
            color="#FFF"
            iconColor='green'
          >
            (19) 314159265
          </Link>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaPhone />}
            color="#FFF"
            iconColor='green'
          >
            (19) 057721566
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