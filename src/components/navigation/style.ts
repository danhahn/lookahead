import styled from 'styled-components';

export const StyledNavigation = styled.button`
  --icon-size: 16px;
  --size: calc(var(--icon-size) * 3);
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  svg {
    fill: var(--color1);
  }
`;
