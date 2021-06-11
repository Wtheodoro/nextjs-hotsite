import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.text};
  text-align: center;


  > h1, p {
    margin-bottom: 3rem;
  }

  p, a {
    font-size: 1.4rem;
  }

  a {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};
  }

  .phoneContact {
    display: flex;

    a + a {
      margin-left: 3rem;
    }
  }

  .items {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    a + a {
      /* border-left: 1px solid white; */
      margin-left: 3rem;
    }

    > a {
      margin-bottom: 1rem;
    }
  }

  .since {
    line-height: 1.5;
    max-width: 40rem;
  }

  .adredd {
    color: #343A40;
  }

  .divisor {
    width: min(56rem, 90%);
    height: 1px;
    background-color: ${props => props.theme.colors.white};
    opacity: 0.5;
    margin-bottom: 2rem;
  }

`;
