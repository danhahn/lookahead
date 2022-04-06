import styled from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-column: 2 / -1;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 30px;
  background-color: var(--color4);
  gap: 10px;
  align-items: center;
  border-radius: 4px;
  &:hover {
    background-color: var(--color3);
  }
  span {
    display: block;
    text-align: center;
  }
  button {
    border: none;
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
    cursor: pointer;
    &.active {
      opacity: 1;
      pointer-events: all;
    }
    &:last-of-type {
      transform: rotate(180deg);
    }
  }
  svg {
    fill: var(--color1);
  }
`;
