import React from 'react';
import * as S from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import Button from '../Button';
import InputText from '../Input';

interface Inputs {
  manufacturer: string
  model: string
  year: number
  version: string
  km: number
  name: string
  phone: string
  email: string,
};

const BudgetForm: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => alert(JSON.stringify(data));
  return (
    <S.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <InputText 
            name="manufacturer" 
            placeHolder="Marca" 
            register={register}
            required
          />

          <InputText 
            name="model" 
            placeHolder="Modelo" 
            register={register}
            required
          />

          <InputText 
            name="year" 
            placeHolder="Ano"
            type="number"
            register={register}
            required
          />

          <InputText 
            name="version" 
            placeHolder="Versão" 
            register={register}
            required
          />

          <InputText 
            name="km" 
            placeHolder="Quilometragem - KM"
            type="number"
            register={register}
          />

          <InputText 
            name="name"
            placeHolder="Seu Nome" 
            register={register}
            required
          />

          <InputText 
            name="phone" 
            placeHolder="tel: (00) 00000-0000"
            register={register}
            required
          />
          
          <InputText 
            name="email" 
            placeHolder="Seu e-mail"
            type="email"
            register={register}
            required
          />
        </div> 
        <Button fullWidth>Avaliar meu carro</Button>
      </form>
    </S.Container>
  )
}

export default BudgetForm;