import React from 'react';
import SubTitle from '../../components/headings/SubTitle';
import BudgetForm from '../../pattens/BudgetForm';
import * as S from './styles';

const SellNow: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <SubTitle>Venda seu carro agora</SubTitle>
        <p>Entre em contato conosco preenchendo os campos abaixo para um atendimento imediato.</p>

        <S.SimulatorWrapper>
         <BudgetForm />
        </S.SimulatorWrapper>
      </S.Content>
    </S.Container>
  )
}

export default SellNow;