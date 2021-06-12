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
        link="mailto:contato@peixebayaku.com.br"
        icon={<HiOutlineMailOpen />}
        iconColor="#6EC1E4"
      >
        contato@peixebayaku.com.br
      </Link>

      <div className="phoneContact">
        <Link 
          link="https://api.whatsapp.com/send?phone=5519974229726"
          icon={<FaWhatsapp />}
          iconColor="#6EC1E4"
        >
          (19) 97422-9726
        </Link>
        <Link 
          link="tel:5519974229726"
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

      <Link 
        link="https://www.google.com.br/maps/place/Av.+Marechal+Carmona,+532+-+Vila+S%C3%A3o+Jorge,+Campinas+-+SP,+13041-311/@-22.9192526,-47.0622773,17z/data=!3m1!4b1!4m5!3m4!1s0x94c8c8d29cd914bb:0xfa3aa7053c423d14!8m2!3d-22.9192576!4d-47.0600886"
      >
        <p className="adress">
          Av. Marechal Carmona, 532 - Campinas - São Paulo - SP
        </p>
      </Link>
    </S.Container>
  )
}

export default About;