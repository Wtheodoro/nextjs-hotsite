import React from 'react';
import StepByStepCard from '../../components/cards/StepByStepCard';
import SubTitle from '../../components/headings/SubTitle';
import Title from '../../components/headings/Title';
import * as S from './styles';

const HowItWorks: React.FC = () => {
  return (
    <S.Container>
      <Title>Como funciona</Title>
      <SubTitle>Venda o seu carro em apenas 3 passos:</SubTitle>

      <S.CardsWrapper>
        <StepByStepCard 
          title="1.Entre em contato com o especialista"
          imgLink="/images/specialistChekingCar.png"
          imgAlt="Especialista avaliando o carro."  
        >
          Aṕos o seu contato, o especialista fará um <strong>pré-avaliação imediata</strong> e entrará em contato com você.
        </StepByStepCard>

        <StepByStepCard
          title="2. Receba sua proposta"
          imgLink="/images/proposal.png"
          imgAlt="Especialista fazendo uma proposta."  
        >
          O especialista <strong>enviará uma proposta de compra</strong> e. se aceita, iremos até você para uma avaliação presencial de seu carro ou, se preferir, pode vir até nós.
        </StepByStepCard>

        <StepByStepCard
          title="3.Venda Fechada"
          imgLink="/images/deal.png"
          imgAlt="Especialista e cliente fechando negócio."  
        >
          Após a avaliação e o aceite por ambas as partes, o pagamento é realizado imediatamente em conta bancária. Uma vez confirmado o pagamento, faremos a <strong>transferência do veículo no ato</strong>.
        </StepByStepCard>
      </S.CardsWrapper>
    </S.Container>
  )
}

export default HowItWorks;