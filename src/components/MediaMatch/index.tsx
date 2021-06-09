import styled, { css } from 'styled-components';

interface MediaMatchProps {
  hideOnDesktop?: boolean
  hideOnMobile?: boolean
}

const mediaMatchModifiers = {
  hideOnDesktop: () => css`
    @media (min-width: 769px) {
      display: none;
    }
  `,
  hideOnMobile: () => css`
    @media (max-width: 769px) {
      display: none;
    }
  `
}

export default styled.div<MediaMatchProps>`
  ${props => props.hideOnDesktop === true && mediaMatchModifiers.hideOnDesktop()}
  ${props => props.hideOnMobile === true && mediaMatchModifiers.hideOnMobile()}
`;