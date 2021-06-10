import React from 'react';
import { Input } from './styles';

interface InputTextProps {
  name: string
  placeHolder?: string
  type?: 'email' | 'text' |  'number'
  required?: boolean
  register: (name: string, options: Object) => void
}

const InputText: React.FC<InputTextProps> = ({ 
  register,
  name,
  placeHolder,
  type = 'text',
  required = false 
}) => {
  return (
    <Input {...register(name, { required: required})} type={type} placeholder={placeHolder}/>
  )
}

export default InputText;