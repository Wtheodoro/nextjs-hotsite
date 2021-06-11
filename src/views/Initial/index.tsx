import React from 'react';
import { FaWhatsappSquare, FaPhoneSquare } from 'react-icons/fa';
import Link from '../../components/Link';
import Logo from '../../components/Logo';
import MediaMatch from '../../components/MediaMatch';
import BudgetForm from '../../pattens/BudgetForm';
import MainHeader from '../../pattens/MainHeader';

import * as S from './styles';

const Initial: React.FC = () => {
  return (
    <S.Container>
      <MediaMatch hideOnMobile>
        <MainHeader />
      </MediaMatch>

      <S.AddressPhoneInfo>
        <Logo />
        <p>Av. Marechal Carmona, 532 - Campinas - São Paulo - SP</p>

        <S.LinksWrapper>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaWhatsappSquare />}
          >
            (19) 97422-9726
          </Link>
          <Link 
            link="https://www.youtube.com/"
            icon={<FaPhoneSquare />}
          >
            (19) 97422-9726
          </Link>
        </S.LinksWrapper>
      </S.AddressPhoneInfo>

      <S.SimulatorWrapper>
        <h1>Venda seu carro sem burocracia, rápido e com segurança.</h1>
        <p>Receba uma proposta de venda imediata por um preço justo e pagamento á vista.</p>

        <S.FormWrapper>
          <BudgetForm />
        </S.FormWrapper>

        <p>* Avaliação local <strong>sem custo</strong></p>
      </S.SimulatorWrapper>
    </S.Container>
  )
}

export default Initial;