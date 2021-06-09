import React from 'react';
import { FaWhatsappSquare, FaPhoneSquare } from 'react-icons/fa';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import MainHeader from '../../pattens/MainHeader';

import * as S from './styles';

const Initial: React.FC = () => {
  return (
    <S.Container>
      <MainHeader />

      <S.AddressPhoneInfo>
        <Logo />
        <p>Av. Marechal Carmona, 532 - Campinas - São Paulo - SP</p>

        <S.LinksWrapper>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaWhatsappSquare />}
          >
            (19) 314159265
          </Link>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaPhoneSquare />}
          >
            (19) 057721566
          </Link>
        </S.LinksWrapper>
      </S.AddressPhoneInfo>

      <S.SimulatorWrapper>
        <h1>Venda seu carro sem burocracia, rápido e com segurança.</h1>
        <p>Receba uma proposta de venda imediata por um preço justo e pagamento á vista.</p>

        <span>* Avaliação local <strong>sem custo</strong></span>
      </S.SimulatorWrapper>
      
      
    </S.Container>
  )
}

export default Initial;