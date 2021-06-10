import styled from 'styled-components';

export const Container = styled.div`

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    margin-bottom: 1rem;
  }

  @media(max-width: 375px) {

    .form {

      input {
        width: 100%;
      }
    }
  }
`;
