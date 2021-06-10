import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const LinksWrapper = styled.div`
  display: flex;

  a + a {
    margin-left: 3rem;
  }
`

