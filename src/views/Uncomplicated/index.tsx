import React from 'react';
import BenefitCard from '../../components/cards/BenefitCard';
import SubTitle from '../../components/headings/SubTitle';
import Title from '../../components/headings/Title';
import { GrDocumentText } from 'react-icons/gr'
import * as S from './styles';
import StatsCard from '../../components/cards/StatsCard';

const Uncomplicated: React.FC = () => {
  return (
    <S.Container>
      <h1 className="logo">Logo sem texto</h1>
      <Title bigSize>Sem Complicação</Title>
      <SubTitle>Há 46 anos atuamos na COMPRA DIRETA de carros.</SubTitle>
      <p>Compramos seu carro ainda HOJE por um PREÇO JUSTO.</p>
      <p>Avaliação local SEM CUSTO, se preferir venha até nós.</p>

      <S.CardsWrapper>
        <BenefitCard
          title="Processo Rápido"
          icon={<GrDocumentText />}
        >
          Avaliamos e enviamos a proposta de compra em até duas horas com pagamento á vista.
        </BenefitCard>

        <BenefitCard
          title="Sem Burocracia"
          icon={<GrDocumentText />}
        >
          Cuidamos de toda a transferência junto á DETRANs e cartórios
        </BenefitCard>

        <BenefitCard
          title="Seguro"
          icon={<GrDocumentText />}
        >
          Você escolhe o processo de avaliação, venha até nós  ou iremos até você.
        </BenefitCard>
      </S.CardsWrapper>

      <S.CardsWrapper>
        <StatsCard
          title="Carros avaliados"
          value="+30 mil"
        />

        <StatsCard
          title="clientes satisfeitos"
          value="+6 mil"
        />

        <StatsCard
          title="atuando no mercado"
          value="+46 anos"
        />
      </S.CardsWrapper>
    </S.Container>
  )
}

export default Uncomplicated;