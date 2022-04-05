import styled from 'styled-components';

export const StyledNavigation = styled.div`
  --icon-size: 16px;
  --size: calc(var(--icon-size) * 3);
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;
  svg {
    fill: var(--color5);
  }
`;
