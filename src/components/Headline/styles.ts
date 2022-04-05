import styled from 'styled-components';
import { Props } from './Headline';

type StyledProps = Pick<Props, 'maxWidth'>;

export const StyledHeadline = styled.h1<StyledProps>`
  color: var(--color1);
  font-weight: 600;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -0.05em;
  margin: 0;
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
`;
