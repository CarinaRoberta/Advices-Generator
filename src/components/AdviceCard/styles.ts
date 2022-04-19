import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--dark-grey);
  width: 25rem;
  height: auto;
  border-radius: 0.4rem;
  padding: 2.3rem;
  position: relative;
  height: 15rem;

  img {
    width: 100%;
    padding: 1rem 0;
  }

  @media (max-width: 568px) {
    margin: 0 20px;
  }
`;

const Title = styled.h3`
  color: var(--neon-green);
  font-size: 0.8rem;
  letter-spacing: 0.19rem;
`;

const Phrase = styled.p`
  color: var(--cyan);
  padding: 1rem 0;
  text-align: center;
`;

const Button = styled.button`
  background-color: var(--neon-green);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 93%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  img {
    width: 1rem;
  }

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 0px 20px 1px var(--neon-green);
  }
`;

export { Container, Title, Phrase, Button };
