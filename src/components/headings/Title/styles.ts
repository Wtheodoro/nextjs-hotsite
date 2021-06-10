import styled, { css } from 'styled-components';
import { TitleProps } from '.';

type Title = Pick<TitleProps , 'bigSize'>

const titleModifiers ={
  bigSize: () => css`
    font-size: 4.5rem;
  `,
}

export const Title = styled.h2<Title>`
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  ${props => props.bigSize && titleModifiers.bigSize()}
`;
