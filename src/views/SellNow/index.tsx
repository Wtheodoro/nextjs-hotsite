import React from 'react';
import SubTitle from '../../components/headings/SubTitle';
import BudgetForm from '../../components/BudgetForm';
import * as S from './styles';

const SellNow: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <SubTitle>Venda seu carro agora</SubTitle>
        <p>Entre em contato conosco preenchendo os campos abaixo para um atendimento imediato.</p>

        <S.SimulatorWrapper>
          <S.FormWrapper>
            <BudgetForm />
          </S.FormWrapper>
        </S.SimulatorWrapper>
      </S.Content>
    </S.Container>
  )
}

export default SellNow;