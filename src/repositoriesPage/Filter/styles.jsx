import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 0.2rem;
  margin: 1rem auto;
  padding-right: 2rem;
  padding-left: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
    gap: 0.8rem;
    padding: 0 1rem;
  }
`;

export const Selector = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #565656;
  color: ${(props) => props.color};
  width: 100%;
  min-height: 2rem;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: background 0.3s, transform 0.3s;
  padding: 0 1rem;

  &:hover, &.selected {

    background: ${(props) => props.color};
    color: #FFF;

    transform: translateX(0) scale(1.02);
  }

  @media screen and (max-width: 768px) {
    border-radius: 20px;

    &:hover, &.selected {
      transform: translateX(0) scale(1.02);
    }
  }
`;

export const Cleaner = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  border: none;
  text-align: left;
  padding: 1rem;

  &:hover {
    color: #FFF;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }
`;
