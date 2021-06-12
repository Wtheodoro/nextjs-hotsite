import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr'
import Button from '../../components/Button';
import Title from '../../components/headings/Title';
import * as S from './styles';
import { useHelpPopUp } from '../../hook/HelpPopUpContext';

const NeedHelpPopUp: React.FC = () => {

  const { isOpen, closePopUp } = useHelpPopUp()

  return (
    <S.Container isOpen={isOpen} onClick={closePopUp}>
      <S.Card>
        <S.CloseIconWrapper>
          <GrFormClose onClick={closePopUp}/>
        </S.CloseIconWrapper>
        <Title>precisa de ajuda?</Title>

        <p>Escolha um dos canais abaixo para um atendimentoimdeiato:</p>

        <div>
          <Button 
            icon={<FaWhatsapp />}
            color="#20B038"
            as="a" 
            href="https://api.whatsapp.com/send?phone=5519974229726"
            fullWidth
          >
            (19) 97422-9726
          </Button>

          <Button 
            icon={<FaPhone />}
            color="#306879"
            as="a" 
            href="https://api.whatsapp.com/send?phone=5519974229726"
            fullWidth
          >
            (19) 97422-9726
          </Button>

          <Button 
            icon={<HiOutlineMailOpen />}
            as="a" 
            href="mailto:contato@peixebayaku.com.br"
            fullWidth
          >
            contato@contato.com.br
          </Button>
        </div>
      </S.Card>

      <S.TransparentBackground />
    </S.Container>
  )
}

export default NeedHelpPopUp;