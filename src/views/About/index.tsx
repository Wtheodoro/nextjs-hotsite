import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import { HiOutlineMailOpen } from 'react-icons/hi'

import * as S from './styles';

const About: React.FC = () => {
  return (
    <S.Container>
      <Logo />

      <p className="since">Há 45 anos atuando na COMPRA DIRETA de carros, sendo o primeiro site do Brasilcom proposta na Internet.</p>

      <div className="divisor" />

      <Link 
        link="https://www.youtube.com/"
        icon={<HiOutlineMailOpen />}
        iconColor="#6EC1E4"
      >
        contato@peixebayaku.com.br
      </Link>

      <div className="phoneContact">
        <Link 
          link="https://www.youtube.com/"
          icon={<FaWhatsapp />}
          iconColor="#6EC1E4"
        >
          (19) 97422-9726
        </Link>
        <Link 
          link="https://www.youtube.com/"
          icon={<FaPhone />}
          iconColor="#6EC1E4"
        >
          (19) 97422-9726
        </Link>
      </div>

      <div className="items">
        <Link link="https://www.youtube.com/">Quem somos</Link>
        <Link link="https://www.youtube.com/">Dúvidas frequentes</Link>
        <Link link="https://www.youtube.com/">Políticas de privacidade</Link>
        <Link link="https://www.youtube.com/">Localização</Link>
      </div>

      <p className="adress">Av. Marechal Carmona, 532 - Campinas - São Paulo - SP</p>
    </S.Container>
  )
}

export default About;