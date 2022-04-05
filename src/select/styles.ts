import styled, { css } from 'styled-components';

const commonStyles = css`
  font-size: 48px;
  letter-spacing: -0.05em;
  font-weight: 600;
  display: block;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--color1);
  padding-block: 20px;
  color: var(--color1);
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100%;
  > * {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index: 1;
    /* The combo of these pointer events allows users to click through direct children that take up the full height of the Wrapper (e.g. a Container whose padding covers clickable elements underneath it), but make sure that grandchildren remain clickable (e.g. a LinkButton inside of that Container). */
    pointer-events: none;

    * {
      pointer-events: auto;
    }
  }
  &.active,
  &:focus-within {
    label {
      opacity: 0;
    }
  }
`;

export const Label = styled.label`
  ${commonStyles}
  opacity: 0.1;
`;

export const Input = styled.input`
  font-family: 'Inter', sans-serif;
  outline: none;
  width: 100%;
  ${commonStyles}
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  ${commonStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  border: none;

  &::after {
    content: '';
    display: block;
    position: absolute;
    inset: auto 0 0 0;
    height: 1px;
    background-color: var(--color1);
    opacity: 0.1;
  }

  span {
    opacity: 0.1;
  }

  svg {
    fill: var(--color1);
    opacity: 0;
    transform: rotate(180deg);
  }

  &:focus,
  &:hover {
    span {
      opacity: 1;
    }
    svg {
      opacity: 1;
    }
  }
`;
